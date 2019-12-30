import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Todos from './Todos'
import AddForm from './AddForm'

class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(t => t.id !== id)
    this.setState({todos})
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm />
      </div>
    )
  }
}

export default App;
