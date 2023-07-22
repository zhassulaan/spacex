import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/header.scss';
import logo from '../assets/images/logo.png';

function Header() {
	const location = useLocation();

	return (
		<header className='header'>
			<div className='header-background'></div>
			<img src={ logo } alt='logo' className='header-icon' />
			<ul className='header-menu'>
				<li>
					<Link to='/' className={ `header-menu__item ${ location.pathname === '/' ? 'active' : '' }` }>Главная</Link>
				</li>
				<li>
					<Link to='/technology' className={ `header-menu__item ${ location.pathname === '/technology' ? 'active' : '' }` }>Технология</Link>
				</li>
				<li>
					<Link to='/flight-schedule' className={ `header-menu__item ${ location.pathname === '/flight-schedule' ? 'active' : '' }` }>График полетов</Link>
				</li>
				<li>
					<Link to='/guarantees' className={ `header-menu__item ${ location.pathname === '/guarantees' ? 'active' : '' }` }>Гарантии</Link>
				</li>
				<li>
					<Link to='/about' className={ `header-menu__item ${ location.pathname === '/about' ? 'active' : '' }` }>О компании</Link>
				</li>
				<li>
					<Link to='/contacts' className={ `header-menu__item ${ location.pathname === '/contacts' ? 'active' : '' }` }>Контакты</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
