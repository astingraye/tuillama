import React, { useEffect, useState } from 'react';
import { render, Text, Box, useInput } from 'ink';
import { Tab } from './Tab.js';
import { Chat } from './Pages/Chat/Chat.js';

export function TabBar({ setUpstreamTab }) {
	const tabs = {
		Chat: <Chat/>,
		Settings: <>
			<Text>Nothing here yet :P</Text>
		</>,
	};

	function updateTab() {
		setUpstreamTab(Object.values(tabs)[tab]);
	}

	const [tab, setTab] = useState(0);

	useEffect(() => {
		updateTab();
	}, [tab]);
    
	useInput((input, key) => {
		if (key.leftArrow || key.rightArrow) {
			const nextIndex =
				(tab + (key.leftArrow ? -1 : 1) + Object.keys(tabs).length) %
				Object.keys(tabs).length;
			setTab(nextIndex);
		}
	});

	return (
		<>
			<Box
				width={'100%'}
				height={3}
				paddingLeft={1}
				borderColor={'white'}
				borderStyle={'round'}
				flexDirection="row"
				gap={2}
			>
				{Object.entries(tabs).map(([key, value], index) => (
					<Tab tabName={key} selected={tab === index} />
				))}
			</Box>
		</>
	);
}
