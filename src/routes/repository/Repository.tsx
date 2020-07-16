import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './repository.styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/6994181?s=460&u=3cbcbbcce69d20b7547b9d8520df7858e5f6e40f&v=4"
            alt="Renato"
          />
          <div>
            <strong>renato/teste</strong>
            <p>Testye descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1500</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>61</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>35</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sdfsd">
          <div>
            <strong>aaaaaaa</strong>
            <p>bbbbbb</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
