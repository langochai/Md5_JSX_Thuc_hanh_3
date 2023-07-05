import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
const fruitList = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];
const showFruitList =
    <div>
        <h1>List of fruit</h1>
        <ul>
            {fruitList.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
root.render(showFruitList)
