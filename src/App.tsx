import React from 'react';
import './App.css';
import {TreeView} from "./TreeView";

export type MatchingConfidence = {
    name:string;
    value:number;
}

const data: MatchingConfidence[] = [
    {name:"high",value:15},
    { name: "low", value: 15 },
    { name: "medium", value: 60 },
    {name:'unattributed',value:10}
];


function renderData(item: MatchingConfidence) {
    return (
        <>
            <h1>Confidence {item.name}</h1>
            <p>{item.value} items</p>
        </>
    );
}


function App() {
    return (
        <div className="App">
            <TreeView items={data} renderItem={renderData} onItemClick={()=>alert('hello')}/>
        </div>
    );
}

export default App;
