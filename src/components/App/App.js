import React from 'react';

import AppHeader from '../App-header/App-header';
import SearchPanel from '../Search-panel/Search-panel';
import TodoList from '../Todo-list/Todo-list';
import ItemStatusFilter from '../Item-status-filter/Item-status-filter';
import ItemAddForm from '../Item-add-form/Item-add-form';

import './App.scss';

class App extends React.Component {
	maxId = 4;
	constructor() {
		super();
		this.state = {
			todoData: [
				this.createTodoItem('Drink Cooffee'),
				this.createTodoItem('Make Awesome App'),
				this.createTodoItem('Have a lunch')
			],
			seacrh: '',
			filter: 'all'
		}
	}

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => ({
			todoData: todoData.filter((el) => el.id !== id)
		}));
	};

	addItem = (text) => {
		const newItem = this.createTodoItem(text);

		this.setState(({todoData}) => {
			const newTodoData = [
				...todoData,
				newItem
			]

			return {
				todoData: newTodoData
			}
		})
	}

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id)
		const oldItem = arr[idx];
		const newItem = { ...oldItem, [propName]: !oldItem[propName] };
		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		]
	}
	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		})
	}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		})
	}

	onSearchChange = (seacrh) => {
		this.setState({
			seacrh
		});
	}

	onFilterChange = (filter) => {
		this.setState({
			filter
		});
	}

	search = (todoData, search) => {
		if (search.length === 0) {
			return todoData;
		}
		return todoData.filter((item) => {
			return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
		});
	}

	filter = (todoData, filter) => {
		if (filter === 'all') {
			return todoData;
		} else if (filter === 'active') {
			return todoData.filter((item) => (!item.done));
		} else if (filter === 'done') {
			return todoData.filter((item) => item.done);
		}
	}

	render() {
		const { todoData, seacrh, filter } = this.state;
		const doneCount = todoData.filter((item) => item.done).length;
		const todoCount = todoData.length - doneCount;
		const visibleItems = this.filter(this.search(todoData, seacrh), filter);

		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel onSearchChange={this.onSearchChange} />
					<ItemStatusFilter 
					filter={filter}
					onFilterChange={this.onFilterChange} />
				</div>
	
				<TodoList todos={visibleItems}
				onDeleted={this.deleteItem}
				onToggleImportant={this.onToggleImportant}
				onToggleDone={this.onToggleDone}	/>
				
				<ItemAddForm onItemAdded={this.addItem} />
			</div>
		);
	}
};

export default App;
