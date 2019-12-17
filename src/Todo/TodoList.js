import React, { Component } from 'react'

class TodoList extends Component {
  constructor () {
    super()
    this.state = {
      userInput: '',
      items: []
    }
  }

  onChange (event) {
    this.setState({
      userInput: event.target.value
    })
  }

  addTodo (event) {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.userInput],
      userInput: ''
    }, () => { console.log(this.state) })
  }

  deleteTodo (item) {
    const array = this.state.items
    const index = array.indexOf(item)
    array.splice(index, 1)
    this.setState({
      items: array
    })
  }

  renderTodos () {
    return this.state.items.map((item) => {
      return (
        <li
          className='list-group-item'
          key={item}
        >
          <div className='row'>
            <div className='col-sm-10 align-self-center'>{item}</div>
            <div class='col-sm'>
              <button className='btn-sm btn-danger' onClick={this.deleteTodo.bind(this, item)}>X</button>
            </div>
          </div>
        </li>
      )
    })
  }

  render () {
    return (
      <div>
        <h1 align='center'>Ma Todo List</h1>
        <form className='row align-items-center mb-2'>
          <div className='col-sm-10 align-self-center'>
            <input
              value={this.state.userInput}
              type='text'
              placeholder='renseignez un item'
              onChange={this.onChange.bind(this)}
              className='form-control mb-2'
            />
          </div>
          <div className='col-sm-2 align-self-center'>
            <button
              onClick={this.addTodo.bind(this)}
              className='btn btn-primary'
            >Ajouter
            </button>
          </div>
        </form>
        <ul className='list-group'>
          {this.renderTodos()}
        </ul>
      </div>
    )
  }
}

export default TodoList
