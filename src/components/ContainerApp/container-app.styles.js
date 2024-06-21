import styled from 'styled-components';

const StyledContainerApp = styled.main`
	background-color: #202733;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-inline: 16px;
`;

const StyledCard = styled.article`
	width: 540px;
	height: 315px;
	background-color: #4f5d74;
	border-radius: 12px;
	padding: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const StyledAdviceNumber = styled.h3`
	font-family: 'Manrope', sans-serif;
	font-size: 11px;
	font-weight: bolder;
	letter-spacing: 3.46px;
	color: #53ffaa;
`;

const StyledText = styled.p`
	font-family: 'Manrope', sans-serif;
	font-size: 24px;
	font-weight: bolder;
	color: #cee3e9;
	text-align: center;
	margin-top: 0;
`;

export { StyledContainerApp, StyledCard, StyledAdviceNumber, StyledText };
