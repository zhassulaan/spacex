import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAdvantages } from '../actions';

import Box from '../components/Box';
import '../assets/styles/home.scss';
import Button from '../components/Button';

function Home() {
	const data = useSelector((state) => state.advantages.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvantages());
  }, [dispatch]);

	return (
		<div className='home'>
			<div className="home-info">
				<h3 className='home-info__title'>Путешествие</h3>
				<h5 className='home-info__description'>на красную планету</h5>
				<div className="home-info__button">
					<Button text={ 'Начать путешествие' } />
				</div>
			</div>
			<div className="home-boxes">
				{ data.map((item) => (
					<Box key={ item.id } text1={ item.name } percentage={ item.number } text2={ item.description } />
				)) }
			</div>
		</div>
	);
}

export default Home;
