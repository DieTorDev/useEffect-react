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
	justify-content: center;
	position: relative;
`;

const StyledAdviceNumber = styled.h3`
	font-family: 'Manrope', sans-serif;
	font-size: 11px;
	font-weight: bolder;
	letter-spacing: 3.46px;
	color: #53ffaa;
	height: 20%;
	display: flex;
	align-items: center;
`;

const StyledText = styled.p`
	font-family: 'Manrope', sans-serif;
	font-size: 34px;
	font-weight: bolder;
	color: #cee3e9;
	text-align: center;
	margin-top: 0;
	height: 80%;
	display: flex;
	align-items: center;
`;

const StyledButton = styled.button`
	background-color: #53ffaa;
	border: none;
	border-radius: 50%;
	width: 80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: -40px;
	cursor: pointer;

	&:hover {
		box-shadow: 0px 0px 10px 0px #53ffaa;
	}
`;

export {
	StyledContainerApp,
	StyledCard,
	StyledAdviceNumber,
	StyledText,
	StyledButton
};
