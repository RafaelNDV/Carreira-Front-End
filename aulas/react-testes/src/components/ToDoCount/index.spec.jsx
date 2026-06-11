import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToDoCount } from './index';
import { getTodos } from '../../services/TodoService';

jest.mock('../../services/TodoService')

describe('ToDoCount', () => {
    test('Deveria renderizar o componente de forma correta', async () => {
        getTodos.mockResolvedValue([])

        const { findByText } = render(<ToDoCount />)

        const count = await findByText('0')

        expect(count).toBeInTheDocument()
    })

    test('Deveria renderizar o contador com intens corretamente', async () => {
        getTodos.mockResolvedValue([
            { id: 1, description: 'Teste 1', completed: false, createdAt: new Date().toISOString() },
            { id: 2, description: 'Teste 2', completed: true, createdAt: new Date().toISOString() },
        ])

        const { findByText } = render(<ToDoCount />)

        const count = await findByText('2')

        expect(count).toBeInTheDocument()
    })

    test("deveria começar com botão desabilitado e número de itens atualizado", async () => {
        const mockTodos = [
            { id: 1, description: "Teste 1", completed: false, createdAt: new Date().toISOString() },
            { id: 2, description: "Teste 2", completed: true, createdAt: new Date().toISOString() },
            { id: 3, description: "Teste 3", completed: false, createdAt: new Date().toISOString() },
        ];

        getTodos.mockResolvedValue(mockTodos);

        render(<ToDoCount />);

        // Verifica se o botão está desabilitado inicialmente
        const refreshButton = screen.getByRole("button", { name: /refresh/i });
        expect(refreshButton).toBeDisabled();

        // Aguarda o número de itens ser atualizado após a busca inicial
        await waitFor(() => {
            expect(screen.getByText("3")).toBeInTheDocument();
        });
    });

    test("deveria habilitar o botão após a busca inicial na API", async () => {
        const mockTodos = [

            { id: 1, description: "Teste 1", completed: false, createdAt: new Date().toISOString() },

        ];

        getTodos.mockResolvedValue(mockTodos);

        render(<ToDoCount />);

        const refreshButton = screen.getByRole("button", { name: /refresh/i });

        // Aguarda a busca inicial ser concluída
        await waitFor(() => {
            expect(refreshButton).not.toBeDisabled();
        });

        // Verifica se o número de itens foi atualizado
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    test("deveria atualizar o número de itens corretamente após clicar no botão de refresh", async () => {
        // Primeira chamada retorna 2 itens
        getTodos.mockResolvedValueOnce([
            { id: 1, description: "Teste 1", completed: false, createdAt: new Date().toISOString() },
            { id: 2, description: "Teste 2", completed: true, createdAt: new Date().toISOString() },
        ]);

        render(<ToDoCount />);

        // Aguarda a busca inicial
        await waitFor(() => {
            expect(screen.getByText("2")).toBeInTheDocument();
        });

        const refreshButton = screen.getByRole("button", { name: /refresh/i });
        expect(refreshButton).not.toBeDisabled();

        // Segunda chamada retorna 4 itens (simulando novos itens adicionados)
        getTodos.mockResolvedValueOnce([
            { id: 1, description: "Teste 1", completed: false, createdAt: new Date().toISOString() },
            { id: 2, description: "Teste 2", completed: true, createdAt: new Date().toISOString() },
            { id: 3, description: "Teste 3", completed: false, createdAt: new Date().toISOString() },
            { id: 4, description: "Teste 4", completed: true, createdAt: new Date().toISOString() },
        ]);

        // Clica no botão de refresh
        await userEvent.click(refreshButton);

        // Aguarda a atualização e verifica se o número foi atualizado
        await waitFor(() => {
            expect(screen.getByText("4")).toBeInTheDocument();
        });

        // Verifica se o botão foi habilitado novamente
        expect(refreshButton).not.toBeDisabled();
    });
})