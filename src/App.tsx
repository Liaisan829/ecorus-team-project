import React from 'react';
import './App.scss';
import {MainPage} from "./pages/MainPage/MainPage"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Ecomarket} from "./pages/Ecomarket/Ecomarket";
import {CollectionPoints} from "./pages/CollectionPoints/CollectionPoints";
import {AboutService} from "./pages/AboutService/AboutService";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/collpoints" element={<CollectionPoints/>}/>
                <Route path="/ecomarket" element={<Ecomarket/>}/>
                <Route path="/aboutservice" element={<AboutService/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
