import React from "react";
import { connect } from "react-redux";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import { addTodo, deleteTodo } from "./actions/actions";

class App extends React.Component {
  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onClickAdd = () => {
    let id = Math.floor(Math.random() * 1000);
    this.props.addTodo({ id, ...this.state });
  };

  onDeleteTodo = (id) => {
    this.props.deleteTodo(id);
  };

  render() {
    const { todos } = this.props;
    return (
      <>
        <Header />
        <div className="app">
          <div className="container">
            <div className="row">
              <div className="col-xs-8">
                <TodoList
                  todos={todos}
                  onDeleteTodo={(id) => this.onDeleteTodo(id)}
                />
              </div>
              <div className="col-xs-4">
                <AddTodo
                  onChange={(e) => this.onChange(e)}
                  onClickAdd={() => this.onClickAdd()}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo, deleteTodo })(App);