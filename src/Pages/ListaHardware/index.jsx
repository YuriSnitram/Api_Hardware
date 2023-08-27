import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hardwares from './../../Components/Hardwares';
import api from './../../Services/api';




const Container = styled.div`
display: flex;
text-align: center;
flex-direction: column;
background-image: url(https://wallpaperaccess.com/full/6604090.gif);
background-size: cover;
color: #fff; 
width: 100vw  ;
height: 100vh;

`



const ListContainer = styled.div`
width: 100%;
display: flex;
border: 100spx solid;
align-items:center;
justify-content:start;
margin-top: 10px auto;
padding: 10px 10px 30px 10px;
flex-direction: column;
`




function ListaHardware() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const url = '/componentes';
        const params = {};
        if (search) {
            params.title_like = search
            api.get('/componentes?_embed=componentes', { params })
                .then((response) => setItems(response.data))

        }

        else {
            api.get(url)
                .then((response) => {
                    console.log(response)
                    setItems(response.data);
                })
        }


    }, [search]);


    return (

        <Container>
            <h1>Turbine seu Setup</h1>
            <input type="search" placeholder='O que precisa para o seu upgrade' value={search} onChange={(ev) => setSearch(ev.target.value)}
            />
            <br />
            <br />
            <ListContainer>
                {
                    items.map(item => (
                        <Hardwares key={item.id} hardwares={item} />

                    ))

                }



            </ListContainer>

        </Container>
    )
}
export default ListaHardware