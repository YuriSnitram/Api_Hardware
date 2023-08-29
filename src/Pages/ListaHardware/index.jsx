import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hardwares from './../../Components/Hardwares';
import api from './../../Services/api';




const Container = styled.div`
display: flex;
text-align: center;
/* background-image: url(https://64.media.tumblr.com/bfdb2e75c8df36dcc9cb424afb3829a2/0727fe47787d0a0c-d8/s540x810/a76a693c4af7bde413ba288614b116899fcf5dfb.gif); */
background-size: cover auto;
flex-direction: column;
background-image: linear-gradient(90deg, #2e0e01 0%, #f50606 35%, #8b3140 100%);
font-family:'arial black';
width: 100vw  ;
height: 100vh;

`



const ListContainer = styled.div`
width: 100%;
display: flex;
background-image: url(https://wallpaperaccess.com/full/6604090.gif);
background-size:cover;
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
            <input type="search"  placeholder='O que precisa para o seu upgrade' value={search} onChange={(ev) => setSearch(ev.target.value)}
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