import { useQuery } from '@apollo/client/react';
import { GET_EQUIPAMENTOS_EM_USO } from '../../../database/graphql/query/feed';

export function EquipamentosEmUso() {
  const { data, loading, error } = useQuery(GET_EQUIPAMENTOS_EM_USO);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar equipamentos.</p>;

  return (
    <div>
      <h2>Equipamentos em uso:</h2>
      <ul>
        {data.equipamentos.map((item) => (
          <li key={item.id}>🟢 {item.nome} ({item.tipo})</li>
        ))}
      </ul>
    </div>
  );
}