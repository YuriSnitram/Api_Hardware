import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import api from './../../Services/api'

const ItemContainer = styled.div`
display: flex;
text-align: top;
justify-content: space-around;
flex: column;
border-radius: 4px;
background-color: white; 
height:120px;
width: 1000px;
color:#29303b;
margin-bottom: 30px;
padding: 30px;
`;

const Title = styled.div`
  display:flex;
  font-weight: 400;
  margin-bottom: 5px;
  color: green;
  text-align: center;
  align-items: start;
  
  `;

const Price = styled.div`
  margin-bottom: 5px;
  display:flex;
  align-items: end;
  justify-content:start;;   
  `;

const Thumbnail = styled.img`
width: auto;
height: 100%;
vertical-align: middle;
float: left;
margin-right: 10px;
`;


// const ItemLink = styled.a`
// text-decoration: none;
// `;

const Button = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center ;
  width:30px;
  align-items:column;
  margin-bottom: -100;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: silver;
  border-color: #6d6dec;
  border-radius: 4px;
  
  `;

const ButtonEdit = styled.span`
  display: block;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: black;
  border-color: silver;
  border-radius: 4px;
`;
const ButtonDelete = styled.span`
  display: block;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: silver;
  border-color: black;
  border-radius: 4px;
`;
const ButtonPane = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
`
const Panel = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
  
`

export default function Hardwares({ hardwares }) {
  const [loading, setLoading] = useState(ture);

  function onDelete(id) {
    setLoading(false);

    const url = `/componentes'${id}`;
    api.delete(url)
      .then((response) => {
        setLoading(response.data);
      });
  }

  return (
    <>
      {!loading
        ? (
          <div>Deletado...</div>
        )
        :
        (

          <ItemContainer>
            <Panel>
              <p>{hardwares.id}</p>
              <a href={hardwares.image} target="_blank" ><Thumbnail src={hardwares.image} /></a>
              <Title>{hardwares.title}</Title>
              <Price>{hardwares.price}</Price>
            </Panel>
            <a href={hardwares.cadastrar} target="_blank"><Button>cadastrar</Button></a>
            <ButtonPane>
              <ButtonEdit>
                <Link to={`/Editar/${hardwares.id}`}>
                  Editar
                </Link>
              </ButtonEdit>
              <ButtonDelete onClick={() => OnDelete(hardwares.id)} target="_blank>" > Deletar </ButtonDelete>
          </ButtonPane>
          </ItemContainer >
         
        )
}
    </>
  )
}

