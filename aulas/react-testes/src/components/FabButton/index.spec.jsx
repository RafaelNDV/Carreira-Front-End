import { render } from "@testing-library/react";
import React from "react";
import { FabButton } from '.'

describe('FabButton', () => {
  test('deveria renderizar corretamente o componente', () => {
    const { getByRole } = render(<FabButton onClick={() => {}}>Texto simples</FabButton>)
    expect(getByRole('button')).toBeInTheDocument()

    expect(getByRole('button')).toHaveClass('fab')
    expect(getByRole('button')).toHaveTextContent('Texto simples')
  })
})