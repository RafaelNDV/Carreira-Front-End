import { render } from '@testing-library/react'
import { Header } from './index'

describe('Header', () => {
  test('Deveria renderizar o componente', () => {
    expect(render(<Header/>)).toBeTruthy()
  })

  test('Deveria renderizar o componente com a classe correta', () => {
    const {container, debug} = render(<Header/>)
    
    debug()
    
    expect(container.firstChild).toHaveClass('header')
  })
})