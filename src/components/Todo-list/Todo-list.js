import React from 'react';

import TodoListItem from '../Todo-list-item/Todo-list-item';

import './Todo-list.scss';

class TodoList extends React.Component {
  render() {
    const { todos, onDeleted, onToggleImportant, onToggleDone } = this.props;

    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className="list-group-item">
          <TodoListItem
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}/>
        </li>
      );
    });

    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    );
  }
}

export default TodoList;
