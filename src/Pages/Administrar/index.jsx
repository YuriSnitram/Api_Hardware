import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../Services/api';
import Hardwareadm from '../../Components/Hardwareadm/index';


const Container = styled.div`
display: flex;
text-align: center;
flex-direction: column;
background-image: linear-gradient(90deg, #06080e 0%, #0c0c0c15 35%, #1780e2 100%);
background-color: silver;
color: #fff; 
width: 100vw;
height: 100vh;
margin: 30px auto;
align-items: center;

`;



const ListContainer = styled.div`
width: 100%;
display: grid;
align-items:center;
background-image: url(https://j.gifs.com/X6GDpo@large.gif?download=true);
margin-top: 10px auto;
padding: 10px 10px 30px 10px;
background-color: silver;
justify-content: center;
`;




function Editar() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const url = '/componentes';

        const params = {};
        if (search) {
            params.title_like = search
            api.get('/componentes?_embed=componentes', { params })
                .then((response) => {
                    setItems(response.data)

                })

        } else {
            api.get(url)
                .then((response) => {
                    // console.log(response)
                    setItems(response.data);
                })
        }


    }, [search]);


    return (

        <Container>
           
            <h1>Turbine seu Setup</h1>
            <input type="search" placeholder='Pesquisar' value={search} onChange={(ev) => setSearch(ev.target.value)}
            />
            <br />
            <br />
            <ListContainer>
                {
                    items.map(item => {

                        return (<Hardwareadm key={item.id} hardwares={item} />)

                    })

                }



            </ListContainer>

        </Container>
    )
}
export default Editar;