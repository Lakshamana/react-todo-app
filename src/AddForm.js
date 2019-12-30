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
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="todo">Add new todo: </label>
          <input type="text" onChange={this.onChange}/>
        </form>
      </div>
    )
  }
}

export default AddForm

