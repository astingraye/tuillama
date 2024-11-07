import { Alert, AlertProps, Spinner } from '@inkjs/ui';
import { Box, Text } from 'ink';
import { useEffect, useState } from 'react';

export function ConnectionCheck({ children }) {
	const [state, setState] = useState({
		message: 'Loading...',
		variant: 'info',
	});

	const [ok, setOk] = useState(false);

	useEffect(() => {
		async function checkStatus() {
			setState({
				message: 'Checking Ollama API Status...',
				variant: 'info',
			});

			try {
				const response = await fetch(process.env.CLILLAMA_ENDPOINT);

				if (response.ok) {
					setState({ message: 'All good!', variant: 'success' });
					setOk(true);
				} else {
					setState({
						message: `${response.status}: ${response.statusText}`,
						variant: 'error',
					});
				}
			} catch (e) {
				setState({ message: e.message, variant: 'error' });
			}
		}

		checkStatus();
	}, []);

	if (ok) return <>{children}</>;

	return (
		<Box
			width={'100%'}
			height={'100%'}
			justifyContent="center"
			alignItems="center"
		>
			<Box>
				<Alert variant={state.variant as any}>{state.message}</Alert>
			</Box>
		</Box>
	);
}
