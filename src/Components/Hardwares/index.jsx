import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`

border-radius: 4px;
background-color: white; 
height:120px;
width: 820px;
color:#29303b;
margin-bottom: 10px;
margin-right: 10px;
padding: 30px;



`

const Title = styled.div`
  font-weight: 400;
  max-width:500px
  margin-bottom: 5px;
  color: green;
  
  
  
  `

const Price = styled.div`
  margin-bottom: 5px;`

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
  display: inline-block;
  margin-bottom: -60px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: black;
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
          <a href={hardwares.url} target="_blank"><Button>Comprar</Button></a>
        </ItemContainer>
      </ItemLink>

    </>
  )
}
