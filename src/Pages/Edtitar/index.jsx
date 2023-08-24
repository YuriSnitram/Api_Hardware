import React, { useState } from "react";
import api from './../../Services/api'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
width: 100vh;



`
const Cad = styled.div`
width: 100vh ;
background-image: url('https://i.pinimg.com/originals/de/34/12/de3412e3c5d2ed0b11ec8291a28a3db5.gif');
padding:10px;
border: 8px inset #4444;
text-align: center;
color: #fff;
background-color: #4444;
background-repeat: no-repeat;
font-family: ;

`;

const initialValues = {
    titulo: '',
    image: '',
    price: 0,
    url: ''
};




function Editar() {


    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();


    function onSubmit(evento) {


        evento.preventDefault();
        const url = '/componentes'


        api.post(url, values)
            .then(() => {
                navigate('/')
            })



    }
    function onChange(ev) {
        const { name, value } = ev.target


        setValues({ ...values, [name]: value })


    }
    return (
        <Container>
            <Cad>

                <h1>Cadastrar</h1>
                <form onSubmit={onSubmit} >
                    <div >
                        <label htmlFor="">Titulo</label><br />
                        <input type="text" id="title" name="title" onChange={onChange} />
                    </div>
                    <div >
                        <label htmlFor="">Url</label><br />
                        <input type="text" id="url" name="url" onChange={onChange} />
                    </div>
                    <div >
                        <label htmlFor="">Imagem</label><br />
                        <input type="text" id="image" name="image" onChange={onChange} />
                    </div>
                    <div >
                        <label htmlFor="">Preço</label><br />
                        <input type="text" id="price" name="price" onChange={onChange} />
                    </div><br />
                    <button type="submit"> Salvar </button>
                    
                </form>

            </Cad>
        </Container>    


        
    )
}


export default Editar;