import { render } from '@testing-library/react'
import React from 'react';
import { SubHeading } from '.';

describe('SubHeading', () => {
  // getBy
  describe('getBy', () => {
    test('Deveria renderizar o componente corretamente', () => {
      const { getByText } = render(<SubHeading>Para estudar</SubHeading>)
  
      expect(getByText('Para estudar')).toBeInTheDocument()
    });
  
    test.skip('Não deveria renderizar o componente corretamente qaundo não tem children', () => {
      const { getByText } = render(<SubHeading></SubHeading>)
  
      expect(getByText('Para estudar')).toBeNull()
    });
  })
  // queryBy
  describe('queryBy', () => {
    test('Deveria renderizar o componente corretamente', () => {
      const { queryByText } = render(<SubHeading>Para estudar</SubHeading>)
  
      expect(queryByText('Para estudar')).toBeInTheDocument()
    });
  
    test('Não deveria renderizar o componente corretamente qaundo não tem children', () => {
      const { queryByText } = render(<SubHeading></SubHeading>)
  
      expect(queryByText('Para estudar')).toBeNull()
    });
  })
  // findBy
  describe('findBy', () => {
    test('Deveria renderizar a descrição após 500ms', async () => {
      const { findByText } = render(<SubHeading>Para estudar</SubHeading>)

      const description = await findByText('Só um exemplo de descrição')
  
      expect(description).toBeInTheDocument()
    });
  
    // test('Não deveria renderizar o componente corretamente qaundo não tem children', () => {
    //   const { queryByText } = render(<SubHeading></SubHeading>)
  
    //   expect(queryByText('Para estudar')).toBeNull()
    // });
  })
});