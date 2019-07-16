import React, { Component } from 'react';

class TodoApp extends Component{
    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" placeholder="接下来做什么？"/>
            </div>
        )
    }
}

export default  TodoApp;