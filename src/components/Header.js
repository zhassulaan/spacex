import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenu } from '../actions';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/header.scss';
import logo from '../assets/images/logo.png';

function Header() {
	const data = useSelector((state) => state.menu.data);
  const dispatch = useDispatch();
	const location = useLocation();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

	return (
		<header className='header'>
			<div className='header-background'></div>
			<img src={ logo } alt='logo' className='header-icon' />
			<ul className='header-menu'>
				{ data.map((item) => (
					<li key={ item.id }>
						<Link to={ item.route ? item.route : '/' } className={ `header-menu__item ${ location.pathname === `/${item.route || ''}` ? 'active' : '' }` }>{ item.text }</Link>
					</li>
				)) }
			</ul>
		</header>
	);
}

export default Header;
