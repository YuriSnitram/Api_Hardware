import React from 'react'
import styled from 'styled-components'

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




`

const Title = styled.div`
  display:flex;
  font-weight: 400;
  margin-bottom: 5px;
  color: green;
  text-align: center;
  align-items: start;
  
  
  `

const Price = styled.div`
  margin-bottom: 5px;
  display:flex;
  align-items: end;
  justify-content:start;;   
  `

const Thumbnail = styled.img`
width: auto;
height: 100%;
vertical-align: middle;
float: left;
margin-right: 10px;
`


const ItemLink = styled.a`
text-decoration: none;
`
const Button = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center  
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
export default function Hardwares({hardwares}) {

  return (
    <>
      <ItemLink hrer={hardwares.url} target="_blank">
        <ItemContainer>
          <a href={ hardwares.image} target="_blank" ><Thumbnail src={hardwares.image} /></a>
          <Title>{hardwares.title}</Title>
          <Price>{hardwares.price}</Price>
          <a href={hardwares.cadastrar} target="_blank"><Button>cadastrar</Button></a>
          <a href={hardwares.excluir} target="_blank"><Button>Excluir</Button></a>
          <a href={hardwares.excluir} target="_blank"><Button>Editar</Button></a>
        </ItemContainer>
      </ItemLink>

    </>
  )
}
