/* eslint-disable camelcase */
import React, { useState, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './dashboard.styles';

import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault(); // não recarregar
    setInputError('');

    if (!newRepository) {
      setInputError('Digite o repositório!');
      return;
    }

    try {
      const response = await api.get(`repos/${newRepository}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepository('');
    } catch (error) {
      setInputError('Erro ao procurar o repositório.');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Olá</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepository}
          onChange={e => setNewRepository(e.target.value)}
          placeholder="Digite o nome do Repositério"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
