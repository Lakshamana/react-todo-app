import React, {Component} from 'react'

class AddForm extends Component {
  state = {
    todo: ''
  }

  onChange = e => {
    this.setState({todo: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addNewTodo(this.state.todo)
    this.setState({todo: ''})
    // document.getElementById('todo').value = '' // use one-way binding towards state instead
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="todo">Add new todo: </label>
          <input type="text" id="todo" onChange={this.onChange} value={this.state.todo} />
        </form>
      </div>
    )
  }
}

export default AddForm

