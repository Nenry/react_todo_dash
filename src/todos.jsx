import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos : [], newTodo: "" };
  }


  addTodo(e) {
    e.preventDefault();
    

  }

  render () {
    return (

      <div>
        <input type="text" onChange={(e)=> this.setState({newTodo: e.target.value}) } value={this.state.newTodo}/>
        <button onClick={(e) => this.addTodo(e)}>Add Todo</button>
      </div>
    );
  }
}

export default Todo;