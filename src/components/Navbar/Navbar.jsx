import { useState } from 'react';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
	const [menuActive, setMenuActive] = useState(false);
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
				<div
					className={`Navbar__menu--toggle ${menuActive ? 'active' : ''}`}
					onClick={() => setMenuActive(!menuActive)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				{menuActive && <NavbarMenu />}
			</div>
		</nav>
	);
};

export default Navbar;
