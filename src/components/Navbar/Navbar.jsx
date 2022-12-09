import NavbarMenu from './NavbarMenu';

const Navbar = () => {
	return (
		<nav className="Navbar">
			<div className="Navbar__logo">
				<h1>
					<span className="accentWhite">{`<`}</span>
					{`LesleyVanDelft`}
					<span className="accentWhite">{`/>`}</span>
				</h1>
			</div>
			<div className="Navbar__menu">
				<div className="Navbar__menu--toggle">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<NavbarMenu />
			</div>
		</nav>
	);
};

export default Navbar;
