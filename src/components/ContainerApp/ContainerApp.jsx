import { useEffect, useState } from 'react';
import {
	StyledAdviceNumber,
	StyledCard,
	StyledContainerApp,
	StyledText
} from './container-app.styles';

const ContainerApp = () => {
	const [data, setData] = useState();
	const [click, setClick] = useState(false);

	useEffect(() => {
		console.log('render');
		fetchData(setData);
	}, [click]);

	if (data)
		return (
			<StyledContainerApp>
				<StyledCard>
					<StyledAdviceNumber>ADVICE #{data.slip.id}</StyledAdviceNumber>
					<StyledText>&quot;{data.slip.advice}&quot;</StyledText>
					<button onClick={() => setClick(!click)}>Advice</button>
				</StyledCard>
			</StyledContainerApp>
		);
};

const fetchData = async setData => {
	try {
		const response = await fetch('https://api.adviceslip.com/advice');
		const json = await response.json();
		setData(json);
	} catch (err) {
		console.error(err);
	}
};

export default ContainerApp;
