import React from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";

function App() {
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
             <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff on={true}/>
            <OnOff on={false}/>
            <OnOff on={true}/>
        </div>
    );
}

export default App;

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}