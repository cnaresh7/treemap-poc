import TreeMap from "react-d3-treemap";
import {MatchingConfidence} from "./App";
import './TreeView.css'

type TreeViewProps<T> = {
    items: T[];
    renderItem(T: any): JSX.Element;
    onItemClick(T: any): void; // whenever the user clicks an item
}

const dummyData = {
    name:'DummyData',
    children:[
        {
            name:'Hello',
            value:21,
            className:"childClassName",
            children:[
                {
                    name:'obj1',
                    value:1
                },
                {
                    name:'obj2',
                    value: 2
                },
                {
                    name:'obj3',
                    value: 4
                }
            ]
        },
        {
            name:'Hi',
            value:21,
            style:{background: 'pink'},
            children:[
                {
                    name:'obj1',
                    value: 4,
                },
                {
                    name:'obj2',
                    value: 5
                },
                {
                    name:'obj3',
                    value: 6
                }
            ]
        },
        {
            name:'Rakesh',
            value: 25
        }
    ],
    className:"TreeViewClass"
}

export const TreeView = ({items, renderItem}: TreeViewProps<MatchingConfidence>) => {
    return <TreeMap
        svgStyle={{color:"white",background:"white"}}
        hideNumberOfChildren
        data={dummyData}
        children={items.map(item => renderItem(item))}

    />
}