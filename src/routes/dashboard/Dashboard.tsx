import React, { useState }from "react";

import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Title, Form, Repositories } from "./dashboard.styles";

import api from "../../services/api";

const Dashboard: React.FC = () => {

  const [repositories, setRepositories] = useState([]);

  function handleAddRepository(){
    
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Olá</Title>

      <Form action="">
        <input placeholder="Digite o nome do Repositério"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/6994181?s=460&u=3cbcbbcce69d20b7547b9d8520df7858e5f6e40f&v=4"
            alt= "Renato W Schlogel"  
          />
          <div>
            <strong>renatoschlogel/be-the-hero</strong>
            <p>Be The Hero</p>
          </div>

          <FiChevronRight size={20} />
        </a>

      </Repositories>

    </>
  );
}

export default Dashboard;