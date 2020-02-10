import React from 'react';

class Todo extends React.Component
{
    render()
    {
        return (
            <div>
                {
                    this.props.info.completed ? 
                    <s onClick={()=>{this.props.setcompletedhandle(this.props.info.id)}}>{this.props.info.task}</s> :
                    <span onClick={()=>{this.props.setcompletedhandle(this.props.info.id)}}>{this.props.info.task}</span>
                }
            </div>
        );
    }
}

export default Todo;