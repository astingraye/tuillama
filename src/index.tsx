import { useEffect, useState } from 'react';
import { render, Text, Box } from 'ink';
import { TabBar } from './components/TabBar.js';
import { ConnectionCheck } from './components/ConnectionCheck.js';
import { config as envConfig } from 'dotenv';

envConfig();

function App() {
	let [tab, setTab] = useState(<></>);

	useEffect;
	return (
		<>
			<Box
				width={process.stdout.columns}
				height={process.stdout.rows}
				flexDirection="column"
				justifyContent="flex-end"
			>
				<ConnectionCheck>
					<TabBar setUpstreamTab={setTab} />
					<Box
						width={'100%'}
						flexGrow={1}
						paddingLeft={1}
						borderColor={'white'}
						borderStyle={'round'}
						flexDirection="row"
						justifyContent="center"
						alignItems="center"
					>
						{tab}
					</Box>
				</ConnectionCheck>
			</Box>
		</>
	);
}

render(<App />);
