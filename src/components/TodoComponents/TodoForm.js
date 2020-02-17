import React from 'react';

class TodoForm extends React.Component
{
    constructor(i)
    {
        super(i);
        this.state =
        {
            "todotext":""
        };
    }

    handleSubmit(e)
    {
        e.preventDefault();
        this.props.pushfunc(this.state.todotext);
    }

    handleChange(e)
    {
        this.setState({[e.target.name]:e.target.value})
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" name="todotext" onChange={this.handleChange.bind(this)} />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;