import React from 'react';
import styled from 'styled-components';

function Button({ text }) {
	return (
		<Wrapper className='button btn'>
			<p className='button-text'>{ text }</p>
			<div className='button-background'></div>
			<div className='button-border'></div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 9.270833vw;
	height: 1.71875vw;
	border: 1px solid transparent;
  border-image: linear-gradient(30deg, #516784, #18202C);
  border-image-slice: 1;
	.button {
		&-text {
			font-size: .729167vw;
			opacity: .75;
		}
		&-background {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: var(--clr-white);
			opacity: .05;
		}
		&-border {
			position: absolute;
			top: -1px;
			right: -1px;
			width: 100%;
			height: 100%;
			&::before,
			&::after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				background-color: var(--clr-white);
			}
		}
	}
	&::before,
	&::after {
		content: '';
		position: absolute;
		bottom: -1px;
		left: -1px;
		background-color: var(--clr-white);
	}
	.button-border::before,
	&::before {
		width: 5px;
		height: 1px;
	}
	.button-border::after,
	&::after {
		width: 1px;
		height: 5px;
	}
	.button-border:hover::before,
	&:hover::before {
		width: calc(100% + 2px);
	}
	.button-border:hover::after,
	&:hover::after {
		height: calc(100% + 2px);
	}
`;

export default Button;
