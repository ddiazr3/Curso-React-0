import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {HookApp} from "./HookApp";
import {CounterApp} from "./01-useState/CounterApp";
import {CounterWithCustomHooks} from "./01-useState/CounterWithCustomHooks";
import {SimpleForm} from "./02-useEffect/simpleForm";
import {FormWithCustomHook} from "./02-useEffect/FormWithCustomHook";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<HookApp></HookApp>*/}
        {/*<CounterApp></CounterApp>*/}
        {/*<CounterWithCustomHooks></CounterWithCustomHooks>*/}
        {/*<SimpleForm></SimpleForm>*/}
        <FormWithCustomHook></FormWithCustomHook>
    </React.StrictMode>
)
