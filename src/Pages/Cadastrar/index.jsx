import React, { useState } from "react";
import api from './../../Services/api'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";


const Cad = styled.div`

width: 100vh;
padding:10px
flex-direction: column;
align-items: center;
justify-items: center;
border: 1px solid #fff;
text-align: center;
background-color: #4444

`

const initialValues = {
    titulo: '',
    image: '',
    price: 0,
    url: ''
};




function Cadastrar() {


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
        <>
            <Cad>

                <h1>Cadastrar</h1>
                <form onSubmit={onSubmit} >
                    <div >
                        <label htmlFor="">Titulo</label>
                        <input type="text" id="title" name="title" onChange={onChange} />
                    </div>
                    <div >
                        <label htmlFor="">Url</label>
                        <input type="text" id="url" name="url" onChange={onChange} />
                    </div>
                    <div >
                        <label htmlFor="">Imagem</label>
                        <input type="text" id="image" name="image" onChange={onChange} />
                    </div>
                    <div >
                        <label htmlFor="">Preço</label>
                        <input type="text" id="price" name="price" onChange={onChange} />
                    </div>
                    <button type="submit"> Salvar </button>
                    
                </form>

            </Cad>


        </>
    )
}


export default Cadastrar;