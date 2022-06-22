import React from "react";
import ReactDOM from 'react-dom/client'
import {App} from "./FirstApp";
import {HelloWorld} from "./HelloWorlsApp";
import {CounterApp} from "./CounterApp";
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App title="Soy Roman..."/>
        {/*<HelloWorld/>*/}
        <CounterApp value={1}></CounterApp>
    </React.StrictMode>
)
