import React from 'react';
import { render } from '@testing-library/react';
import { ChecklistsWrapper } from '.';

describe('ChecklistsWrapper', () => {
    test('Deveria renderizar o componente de forma correta', () => {
        const { getByText } = render(<ChecklistsWrapper>Content</ChecklistsWrapper>);

        expect(getByText('Content')).toBeInTheDocument();
    })
})