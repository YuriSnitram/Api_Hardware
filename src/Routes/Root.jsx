import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListaHardware from "./../Pages/ListaHardware"
import Cadastrar from "./../Pages/Cadastrar";
import NotFound from "./../Pages/NotFound";
import Editar from "../Pages/Editar";
import Dados from "../Pages/Dados/altDados";


const Root = () => {

    return (
        <Router>

            <Routes>
            <Route path="/Editar" element={<Editar />} />
            <Route path="/AltDados" element={<AltDados/>} />
                <Route path="/" element={<ListaHardware />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </Router>
    );
}
export default Root