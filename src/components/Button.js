import React from 'react';
import styled from 'styled-components';

function Button({ text }) {
	return (
		<Wrapper className='button'>
			<div className='button-background'></div>
			<p className='button-text'>{ text }</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 180px;
	height: 35px;
	.button {
		&-background {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: var(--clr-white);
			opacity: .05;
		}
		&-text {
			font-size: 14px;
			opacity: .75;
		}
	}
`;

export default Button;
