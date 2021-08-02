import React, { Component } from 'react'

export default class FormInput extends Component {
  state = {
    name: ' ',
    age: ' ',
    city: '',
    items: [],
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log(this.state.name)
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({
      name: ' ',
      age: ' ',
      city: ' ',
      items: [
        ...this.state.items,
        { name: this.state.name, age: this.state.age, city: this.state.city },
      ],
    })
  }

  renderCard = () => {
    return this.state.items.map((item, indx) => {
      return (
        <div className="card" key={indx}>
          <div className="card-body">
            <h2>{item.name}</h2>
            <hr />
            <p>You have {item.age} years.</p>
            <p>You live in {item.city}. </p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="card my-3">
          <div className="card-header">Add someone</div>
          <div className="card-body">
            <form className="my-form" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="age"
                  onChange={this.onChange}
                  value={this.state.age}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="city"
                  onChange={this.onChange}
                  value={this.state.city}
                />
              </div>
              <button className="btn btn-primary">Create your file</button>
            </form>
          </div>
        </div>
        {this.renderCard()}
      </div>
    )
  }
}
