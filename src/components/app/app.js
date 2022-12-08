import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "Jhon C.", salary: 800, increase: true, rise: false, id: 1 },
				{ name: "Alex M.", salary: 3000, increase: false, rise: true, id: 2 },
				{ name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
				{ name: "Max P.", salary: 50000, increase: false, rise: true, id: 4 },
			],
			term: "",
			filter: "all",
		};
		// this.newId = nextId();
	}
	deleteItem = (id) => [
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		}),
	];

	addItem = (name, salary, id) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	onToogleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	searchEmp = (items, term) => {
		if (term.lengrh === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	};

	onUpdateSearch = (term) => {
		this.setState({ term });
	};

	filterPost = (items, filter) => {
		switch (filter) {
			case "rise":
				return items.filter((item) => item.rise);
			case "moreThen1000":
				return items.filter((item) => item.salary > 1000);
			default:
				return items;
		}
	};
	onFilterSelect = (filter) => {
		this.setState({ filter });
	};
	render() {
		const { data, term, filter } = this.state;
		const visibleDate = this.filterPost(this.searchEmp(data, term), filter);
		return (
			<div className="app">
				<AppInfo data={data} />

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>
				<EmployeesList
					data={visibleDate}
					onDelete={this.deleteItem}
					onToogleProp={this.onToogleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
