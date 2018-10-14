import React, { Component } from 'react';


 class TodoList extends Component {

    constructor() {
        super()
        this.state = {
            todos: [],
            text: ''
        }
        this.create = this.create.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.cancle = this.cancle.bind(this);
        this.update = this.update.bind(this);
        this.table = this.table.bind(this);

    }

    create(e) {
        const text = e.target.value;
        this.setState({ text});
    }
    addTodo(e) {
        e.preventDefault();
        const { text, todos } = this.state;

        todos.push(text);
        this.setState({
            todos,
            text: "",
            currentIndex: null
        })
        console.log(todos);
    }

    delete(index) {
        const { todos } = this.state;
        // console.log(index);
        todos.splice(index, 1);
        console.log(todos);
        this.setState({ todos, currentIndex: null });


    }
    edit(index) {
        const { todos } = this.state;
        console.log(index);
        this.setState({ 
            text: todos[index], 
            currentIndex: index 
        })
    }
    update() {
        const { text, currentIndex, todos } = this.state;
        todos[currentIndex] = text;
        this.setState({
            todos,currentIndex:null,text:''
        })
        // this.setState(() => {
        //     return ({
        //         todos,
        //         currentIndex: null,
        //         text: ''
        //     })
        // })
    }
    cancle() {
        this.setState({
            currentIndex: null,
            text:''
        })
    }
  inputBody() {
        const { currentIndex } = this.state;
        return (
             <div>
              <h1> Todo List </h1>
               <form onSubmit={this.addTodo}>
                <input
                    style={{ margin: 10 }}
                    value={this.state.text}
                    onChange={this.create}
                    autoFocus
                    />
        {currentIndex != null ?
        <span><button onClick={this.update}>Update</button>
        <button onClick={this.cancle}>Cancle</button>
        </span>    :
        <button type='submit'>Add</button>}
        </form>
    </div>
    )
    }
    table() {
        const { todos } = this.state;

        return (
    <table className='table table-striped' >
         <thead>
            <tr>
                <th>S.No</th>
                <th>Todo</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
         </thead>
            <tbody>
                {todos.map((item, index) => {
             return (
                <tr key={`${index} ${item} ` }>

                    <td>{index + 1}</td>
                    <td>{item} </td>
                    <td><button onClick={this.edit.bind(this, index)} >Edit</button></td>
                    <td> <button onClick={this.delete.bind(this, index)}>Remove</button></td>
                </tr>
                )
            })}
            </tbody>
    </table>
        )
    }

    render() {
        const { currentIndex,text } = this.state;

        return (
            <div style={{ textAlign: "center", padding: 10 }}>
                {this.inputBody()}
                <div>
    <p>{currentIndex != null ? 
        `You are Currently Editing is "${text}" the  Index ${currentIndex + 1} ` : ""}
    </p>
                {this.table()}
                </div>
            </div>
        )
    }
}
export default TodoList;
