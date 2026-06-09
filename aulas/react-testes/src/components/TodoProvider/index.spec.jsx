import React from 'react';
import { waitFor, act, render } from '@testing-library/react';
import { TodoProvider } from './index';
import { getTodos } from "../../services/TodoService";

jest.mock("../../services/TodoService")

describe('TodoProvider', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })


  test('Deveria renderizar o provider corretamente, buscando os todos ao montar', async () => {
    render(<TodoProvider/>)

    
    act(() => {
      jest.runAllTimers()
    })


    await waitFor(() => {
      expect(getTodos).toHaveBeenCalled()
    })
  }) 
})