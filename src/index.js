import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

document.ondragover = document.ondrop = (ev) => {
    ev.preventDefault()
}
  
document.body.ondrop = (ev) => {
    //console.log(ev.dataTransfer.files[0].path)
    ev.preventDefault()
}
// Now we can render our application into it
render( <App />, document.getElementById('root') );
