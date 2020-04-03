import React from "react";
import "./styles.css";
import "./bootstrap.css";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTodo: "",
      todos: ["walk dog", "make lunch"]
    };
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.state.currentTodo) {
      alert("Please enter todo...");
    } else {
      var newTodos = this.state.todos;
      newTodos.push(this.state.currentTodo);
      this.setState({
        currentTodo: "",
        todos: newTodos
      });
    }
  }

  handleChange(e) {
    var data = document.getElementById("todo-input").value;
    console.log(data);
    this.setState({
      currentTodo: data
    });
  }

  render() {
    return (
      <div>
        <TodoTable todos={this.state.todos} />
        <Form>
          <FormGroup>
            <Label for="example">Enter a task: </Label>
            <Input
              id="todo-input"
              onChange={this.handleChange.bind(this)}
              value={this.state.currentTodo}
            />
          </FormGroup>
          <Button onClick={this.handleClick.bind(this)}> Add Task </Button>
        </Form>
      </div>
    );
  }
}

class TodoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    };
  }

  render() {
    let rows = this.state.todos.map(todo => {
      return <tr>{todo}</tr>;
    });

    return (
      <Table>
        <thead>
          <tr>
            <th>ToDo Task</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}
