import React from 'react';
import styled from 'styled-components';
import rotate from '../assets/images/rotate.svg';

function Alert() {
	return (
		<Wrapper>
			<img src={ rotate } alt="Поверните устройство"/>
			<p class="text">Поверните устройство</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: none;
	gap: 10px;
	width: 100vw;
	height: 100vh;
		
	.text {
		text-align: center;
		font-size: 23px;
		color: #BCA48D;
	}

	@media only screen and (max-device-width: 812px) and (orientation: portrait) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export default Alert;
