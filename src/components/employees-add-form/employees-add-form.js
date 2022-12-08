import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

// import "./employees-add-form.css";
import "./employees-add-form.scss";

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			salary: "",
		};
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	addItem = (e) => {
		e.preventDefault();
		let id = uuidv4();
		if (document.add_form.name.value && document.add_form.salary.value) {
			this.props.onAdd(this.state.name, this.state.salary, id);
			this.setState({
				name: "",
				salary: "",
			});
		}
	};

	render() {
		const { name, salary } = this.state;
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					name="add_form"
					className="add-form d-flex"
					onSubmit={this.addItem}
				>
					<input
						type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name="name"
						value={name}
						onChange={this.onValueChange}
					/>
					<input
						type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name="salary"
						value={salary}
						onChange={this.onValueChange}
					/>

					<button type="submit" className="btn btn-outline-light">
						Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;
