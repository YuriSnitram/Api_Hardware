import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom'
import api from "../../Services/api";

const initialValues = {
    titulo: '',
    image: '',
    price: 0,
    url: ''
};

const Container = styled.div`
display: flex;
justify-content: center;
width: 100vh;
`;
const Cad = styled.div`
width: 100vh ;
background-image: url('https://i.pinimg.com/originals/de/34/12/de3412e3c5d2ed0b11ec8291a28a3db5.gif');
padding:10px;
border: 8px inset #4444;
text-align: center;
color: #fff;
background-color: #4444;
`;

function Editar() {

    
    const [values, setValues] = useState(initialValues);
    
    const navigate = useNavigate();

    const { id } = useParams();

    const url = `/componentes/${id}`;
    useEffect( () =>{
        if (id){
            api.get(url)
                .then( (response) =>{
                    setValues(response.data)
                })
        }
    },[])


    
    
    
    function onSubmit(evento) {
        evento.preventDefault();


        api.put(url, values)
            .then(() => {
                navigate('/Administrar')
            })



    }
    function onChange(ev) {
        const { name, value } = ev.target


        setValues({ ...values, [name]: value })


    }
    return (
        <Container>
            <Cad>

                <h1>Editar</h1>
                <form onSubmit={onSubmit} >
                    <div >
                        <label htmlFor="">Titulo</label><br />
                        <input type="text" id="title" name="title" value={values.title} onChange={onChange} />
                    </div>
                    <div >
                        <label htmlFor="">Url</label><br />
                        <input type="text" id="url" name="url" value={values.url}  onChange={onChange} />
                    </div>
                    <div >
                        <label htmlFor="">Imagem</label><br />
                        <input type="text" id="image" name="image" value={values.image} onChange={onChange} />
                    </div>
                    <div >
                        <label htmlFor="">Preço</label><br />
                        <input type="text" id="price" name="price" value={values.price} onChange={onChange} />
                    </div><br />
                    <button type="submit"> Salvar </button>
                    
                </form>

            </Cad>
        </Container>    


        
    )
}


export default Editar;