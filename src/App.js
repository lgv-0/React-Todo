import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component
{
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(i)
  {
    super(i);

    this.state =
    {
      "listitems":[{task: 'Organize Garage',id: 1,completed: false},{task: 'Bake Cookies',id: 2,completed: false}]
    };
  }

  pushItem(name)
  {
    this.state.listitems.push({task: name, id: this.state.listitems[this.state.listitems.length - 1].id + 1,completed: false});
    this.setState(
      {
        "listitems":this.state.listitems
      });
  }

  setCompleted(id)
  {
    this.setState(
      {
        "listitems":this.state.listitems.map((i)=>
          {
            if (i.id == id)
              i.completed = !i.completed;

            return i;
          })
      });
  }

  clearCompleted()
  {
    this.setState(
      {
        "listitems":this.state.listitems.filter((i)=>
          {
            if (!i.completed)
              return true;
          })
      }
    )
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList items={this.state.listitems} setcompleted={this.setCompleted.bind(this)} />
        <TodoForm pushfunc={this.pushItem.bind(this)} />
        <button onClick={this.clearCompleted.bind(this)}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
