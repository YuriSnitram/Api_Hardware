import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaHardware from "./../Pages/ListaHardware"
import Cadastrar from "./../Pages/Cadastrar";
import NotFound from "./../Pages/NotFound";
import Administrar from "../Pages/Administrar";
import Editar from "../Pages/Edtitar";



const Root = () => {

    return (
        <Router>

            <Routes>
                <Route path="/Administrar" element={<Administrar />} />

                <Route path="/Editar/:id" element={<Editar />} />
                <Route path="/" element={<ListaHardware />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </Router>
    );
}
export default Root