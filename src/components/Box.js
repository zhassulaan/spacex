import React from 'react';
import styled from 'styled-components';

function Box({ text1, percentage, text2 }) {
	return (
		<Wrapper>
			<div className="background"></div>
			<p>{ text1 }</p>
			<h1>{ percentage }</h1>
			<p>{ text2 }</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 9.635417vw;
	height: 9.635417vw;
	padding-top: 1.927083vw;

	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		background: linear-gradient(to right, transparent, #FDFDFD);
		background-size: 200% 100%;
		background-position: right;
		opacity: .03;
		z-index: -1;
	}
`;

export default Box;
