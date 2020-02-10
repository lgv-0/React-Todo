// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component
{
    render()
    {
        return (
            <div id="list">
                {
                    this.props.items.map((i)=>
                        {
                            return <Todo info={i} key={i.id} setcompletedhandle={this.props.setcompleted} />;
                        })
                }
            </div>
        );
    }
}

export default TodoList;