import Test from '../pages/Test';

const Container = ({ children }) => {
	return (
		<div className="Container">
			{children}
			<Test />
		</div>
	);
};

export default Container;
