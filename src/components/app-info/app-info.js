import "./app-info.css";

const AppInfo = ({ data }) => {
	const elements = data.length;
	const elementsToIncrease = data.filter((item) => item.increase).length;
	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании N</h1>
			<h2>Общее число сотрудников: {elements}</h2>
			<h2>Премию получат: {elementsToIncrease}</h2>
		</div>
	);
};

export default AppInfo;
