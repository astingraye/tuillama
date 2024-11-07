import { Box } from 'ink';
import { Alert } from '@inkjs/ui';
import { AlertProps } from '@inkjs/ui';
import { useEffect, useState } from 'react';

interface NotificationProps extends AlertProps {
	timeout?: number
}

export function Notification(props: NotificationProps) {
	const [ended, setEnded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setEnded(true);
		}, props.timeout);
	}, []);

	if(ended) return null;

	return (
		<Box
			position="absolute"
			width={'100%'}
			height={'100%'}
			justifyContent="center"
			alignItems="center"
		>
			<Box marginTop={2} width={"auto"}>
				<Alert {...props}/>
			</Box>
		</Box>
	);
}
