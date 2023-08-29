import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import api from '../../Services/api'

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

const Button = styled.span`
  display: flex;
  flex-direction: center;
  justify-content: center ;
  align-items:column;
  margin-bottom: -60;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: black;
  border-color: #6d6dec;
  border-radius: 4px;
  
  `;



const ButtonEdit = styled.span`
display: inline-block;
font-weight: 400;
background-color:green;
text-align: center;
white-space: nowrap;
vertical-align: middle;
cursor: pointer;
border: 2px solid black;
font-size: 14px;
padding: 9px 15px;
color: #000;
border-radius: 4px;

`;
const ButtonDelete = styled.span`
display: inline-block;
font-weight: 400;
background-color: red;
text-align: center;
white-space: nowrap;
vertical-align: middle;
cursor: pointer;
border: 2px solid black;
font-size: 14px;
padding: 10px 15px;
color: #000;
border-radius: 4px;

`;

const ButtonPane = styled.div`
display: flex;
width:150px;
height:40px;
flex-direction: center;
justify-content:space-between;
align-items:center; 


margin-bottom: -60;
font-weight: 400;
text-align: center;
cursor: pointer;
color: #fff;
background-color: black;
border-radius: 8px;
text-decoration: none;



`;

const Panel = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
  
`;
const Cadastrar = styled.div`

`


export default function Hardwares({ hardwares }) {
  const [loading, setLoading] = useState(true);

  function onDelete(id) {
    setLoading(false);

    const url = `/componentes/${id}`;
    api.delete(url)
      .then((response) => {});
  }

  return (
    <>
    <a href={hardwares.cadastrar} target="_blank"><Button>Cadastrar</Button></a>
    
    
      {!loading
        ? (
          <div>Deletado...</div>
          )
          :
          (
            
            <ItemContainer>
            
            <Panel>
              
              <Thumbnail src={hardwares.image} />
              <Title>{hardwares.title}</Title>
              <Price>{hardwares.price}</Price>
            </Panel>
            
            <ButtonPane>
              <ButtonEdit>
                <Link to={`/Editar/${hardwares.id}`}>
                  Editar
                </Link>
              </ButtonEdit>
              <ButtonDelete onClick={() => onDelete(hardwares.id)} > Deletar </ButtonDelete>
            </ButtonPane>
          </ItemContainer >
          

        )
      }
    </>
  )
}

