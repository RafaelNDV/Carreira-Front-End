import { render } from '@testing-library/react'
import { Container } from '.'
import React from 'react'

describe('Container', () => {
  test('Deveria renderizar o componente de forma correta', () => {
   const { getByText, container } = render(<Container>Content</Container>)

   expect(getByText('Content')).toBeInTheDocument()
   expect(container.querySelector('.container')).toBeInTheDocument()
  })
})