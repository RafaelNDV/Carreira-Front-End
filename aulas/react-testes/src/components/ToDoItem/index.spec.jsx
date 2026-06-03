import { render } from "@testing-library/react"
import React from "react";
import { TodoContext } from '../TodoProvider/TodoContext'
import { ToDoItem } from '.'
import userEvent from '@testing-library/user-event'

describe('ToDoItem', () => {
  test('Deveria renderizar o item corretamente', () => {
    const item = {
      description: 'Aprender Jest',
      createdAt: "2025-08-26T10:00:00.000Z",
      completed: false,
    }

    const { getByText, getByRole } = render(
      <TodoContext.Provider value={{  }}>
        <ToDoItem item={item}/>
      </TodoContext.Provider>
    );

    expect(getByText('Aprender Jest')).toBeInTheDocument()
    expect(getByText('26/08/2025')).toBeInTheDocument()
    expect(getByRole('checkbox')).not.toBeChecked()
  })

  test('Deveria chamar a função selectTodoForEdit quando o botão de editar for clicado', async () => {

    const funcaoSimulandoSelectedTodoForEdit = jest.fn()
    const item = {
      description: 'Editar Jest',
      createdAt: "2025-08-26T10:00:00.000Z",
      completed: false,
    }

    const { getByRole } = render(
      <TodoContext.Provider value={{ selectTodoForEdit: funcaoSimulandoSelectedTodoForEdit }}>
        <ToDoItem item={item}/>
      </TodoContext.Provider>
    );

    const button = getByRole('button', {name: /edit/i})

    await userEvent.click(button)

    expect(funcaoSimulandoSelectedTodoForEdit).toHaveBeenCalledWith(item)
  })

  test('Deveria chamar a função removeTodo quando o botão de deletar for clicado', async () => {

    const funcaoSimulandoRemoveTodo = jest.fn()
    const item = {
      description: 'Excluir Jest',
      createdAt: "2025-08-26T10:00:00.000Z",
      completed: false,
    }

    const { getByRole } = render(
      <TodoContext.Provider value={{ removeTodo: funcaoSimulandoRemoveTodo }}>
        <ToDoItem item={item}/>
      </TodoContext.Provider>
    );

    const button = getByRole('button', {name: /delete/i})

    await userEvent.click(button)

    expect(funcaoSimulandoRemoveTodo).toHaveBeenCalledWith(item)
  })

  test('[data-testid] Deveria chamar a função removeTodo quando o botão de deletar for clicado', async () => {

    const funcaoSimulandoRemoveTodo = jest.fn()
    const item = {
      description: 'Excluir Jest',
      createdAt: "2025-08-26T10:00:00.000Z",
      completed: false,
    }

    const { getByTestId } = render(
      <TodoContext.Provider value={{ removeTodo: funcaoSimulandoRemoveTodo }}>
        <ToDoItem item={item}/>
      </TodoContext.Provider>
    );

    const button = getByTestId('btn-delete')

    await userEvent.click(button)

    expect(funcaoSimulandoRemoveTodo).toHaveBeenCalledWith(item)
  })
})