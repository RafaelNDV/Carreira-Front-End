import { render, screen } from '@testing-library/react'
import ToDoGroup from '.'
import { TodoContext } from '../TodoProvider/TodoContext'

describe('ToDoGroup', () => {
  const renderWithTodoContext = (component) => {
    return render(
      <TodoContext.Provider
        value={{
          toggleItemCompleted: jest.fn(),
          removeTodo: jest.fn(),
          selectTodoForEdit: jest.fn(),
        }}
      >
        {component}
      </TodoContext.Provider>
    )
  }

  test('Deveria renderizar a mesangem de carregando quando o isLoading for true', () => {
    render(<ToDoGroup isLoading={true} todos={[]} heading='teste' />)

    expect(screen.getByText('teste')).toBeInTheDocument()
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
    expect(screen.queryByText('Nenhum item encontrado.')).not.toBeInTheDocument()
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })

  test('Deveria renderizar a mesangem de nenhum item encontrado quando o array de todos estiver vazio', () => {
    render(<ToDoGroup isLoading={false} todos={[]} heading='teste' />)

    expect(screen.getByText('teste')).toBeInTheDocument()
    expect(screen.getByText('Nenhum item encontrado.')).toBeInTheDocument()
    expect(screen.queryByText('Carregando...')).not.toBeInTheDocument()
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })

  test('Deveria renderizar o componente de forma correta', () => {
    const items = [
      { id: 1, description: 'Estudar React', completed: false, createdAt: '2025-08-26T12:00:00Z' },
    ]

    renderWithTodoContext(<ToDoGroup isLoading={false} todos={items} heading='teste' />)

    expect(screen.getByText('teste')).toBeInTheDocument()
    expect(screen.queryByText('Carregando...')).not.toBeInTheDocument()
    expect(screen.queryByText('Nenhum item encontrado.')).not.toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
  })

  test('Deveria renderizar os itens do grupo corretamente', () => {
    const items = [
      { id: 1, description: 'Estudar React', completed: false, createdAt: '2025-08-26T12:00:00Z' },
      { id: 2, description: 'Estudar Jest', completed: true, createdAt: '2025-08-27T12:00:00Z' },
    ]

    renderWithTodoContext(<ToDoGroup isLoading={false} todos={items} heading='teste' />)

    expect(screen.getAllByRole('listitem')).toHaveLength(2)

    const todoItem1 = screen.getByText('Estudar React')
    expect(todoItem1).toBeInTheDocument()
    const todoItem2 = screen.getByText('Estudar Jest')
    expect(todoItem2).toBeInTheDocument()
  })

  test.each([
    {isLoading : true, items: []},
    {isLoading : false, items: []},
    {isLoading: false, items: [{ id: 1, description: 'Estudar React', completed: false, createdAt: '2025-08-26T12:00:00Z' }]}
  ])('Deveria renderizar o título da lista o tempo todo', ({ isLoading, items }) => {
    const {getByText, queryAllByRole, queryByText} = render(
      <TodoContext.Provider value={{}}>
        <ToDoGroup isLoading={isLoading} todos={items} heading='teste'/>
      </TodoContext.Provider>
    )

    expect(getByText('teste')).toBeInTheDocument()
    expect(queryAllByRole('listitem')).toHaveLength(items.length)

    if(isLoading) {
      expect(getByText('Carregando...')).toBeInTheDocument()
    }else{
      expect(queryByText('Carregando...')).toBeNull()
    }
  })

  describe('false-positive', () => {
    test('Deveria renderizar a mesangem de nenhum item encontrado quando o array de todos estiver vazio', () => {
    render(<ToDoGroup isLoading={false} todos={[]} heading='teste' />)

    expect(screen.getByText('teste')).toBeInTheDocument()
    expect(screen.queryByText('Carregando...')).not.toBeInTheDocument()
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
    
    
    // expect(screen.getByText('Nenhum item encontrado.')).toBeInTheDocument()
  })
  })
})
