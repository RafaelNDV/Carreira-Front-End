import React from 'react';
import { render } from '@testing-library/react';
import { ToDoCount } from './index';
import { getTodos } from '../../services/TodoService';

jest.mock('../../services/TodoService')

describe('ToDoCount', () => {
    test('Deveria renderizar o componente de forma correta', async () => {
        getTodos.mockResolvedValue([])
        
        const { findByText } = render(<ToDoCount/>)

        const count = await findByText('0')

        expect(count).toBeInTheDocument()
    })

    test('Deveria renderizar o contador')
})