import React from 'react';
import Box from '../components/Box';
import '../assets/styles/home.scss';
import Button from '../components/Button';

function Home() {
	return (
		<div className='home'>
			<div className="home-info">
				<h3 className='home-info__title'>Путешествие</h3>
				<h5 className='home-info__description'>на красную планету</h5>
				<Button text={ 'Начать путешествие' } />
			</div>
			<div className="home-boxes">
				<Box text1={ 'мы' } percentage={ 1 } text2={ 'на рынке' } />
				<Box text1={ 'гарантируем' } percentage={ 50 } text2={ 'безопасность' } />
				<Box text1={ 'календарик за' } percentage={ 2001 } text2={ 'в подарок' } />
				<Box text1={ 'путешествие' } percentage={ 597 } text2={ 'дней' } />
			</div>
		</div>
	);
}

export default Home;
