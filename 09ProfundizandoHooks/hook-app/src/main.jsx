import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import {HookApp} from "./HookApp";
// import {CounterApp} from "./01-useState/CounterApp";
// import {CounterWithCustomHooks} from "./01-useState/CounterWithCustomHooks";
// import {SimpleForm} from "./02-useEffect/simpleForm";
// import {FormWithCustomHook} from "./02-useEffect/FormWithCustomHook";
// import {MultiCustomHooks} from "./03- examples/MultiCustomHooks";
import {FocusScreen} from "./04-useRef/FocusScreen";
import {Layout} from "./05-useLayoutEffect/Layout";
import {Memorize} from "./06-memos/Memorize";
import {MemoHooks} from "./06-memos/MemoHooks";
import {CakkbackHook} from "./06-memos/CakkbackHook";
import {Padre} from "./07-tarea-memo/Padre";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<HookApp></HookApp>*/}
        {/*<CounterApp></CounterApp>*/}
        {/*<CounterWithCustomHooks></CounterWithCustomHooks>*/}
        {/*<SimpleForm></SimpleForm>*/}
        {/*<FormWithCustomHook></FormWithCustomHook>*/}
        {/*<MultiCustomHooks></MultiCustomHooks>*/}
        {/*<FocusScreen></FocusScreen>*/}
        {/*<Layout></Layout>*/}
        {/*<Memorize></Memorize>*/}
        {/*<MemoHooks></MemoHooks>*/}
        {/*<CakkbackHook></CakkbackHook>*/}
        <Padre></Padre>
    </React.StrictMode>
)
