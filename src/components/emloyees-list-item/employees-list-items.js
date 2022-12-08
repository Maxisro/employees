import "./employees-list-item.css";

const EmployeesListItem = (props) => {
	const { name, salary, onDelete, onToogleProp, increase, rise } = props;

	let clName = "list-group-item d-flex justify-content-between";
	if (increase) {
		clName += " increase";
	}
	if (rise) {
		clName += " like";
	}

	return (
		<li className={clName}>
			<span className="list-group-item-label" onClick={onToogleProp} data-toggle="rise">
				{name}
			</span>
			<input
				type="text"
				className="list-group-item-input"
				defaultValue={"$" + salary}
			/>
			<div className="d-flex justify-content-center align-items-center">
				<button
					type="button"
					className="btn-cookie btn-sm "
					onClick={onToogleProp}
					data-toggle="increase"
				>
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button" className="btn-trash btn-sm " onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	);
};

export default EmployeesListItem;
