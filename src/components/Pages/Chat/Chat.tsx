import { TextInput } from '@inkjs/ui';
import { Box, Text } from 'ink';
import { useState } from 'react';
import axios from 'axios';
import { Message } from './Message.js';

export function Chat() {
	const [messages, setMessages] = useState([]);

	const [isTyping, setIsTyping] = useState(false);
	
	async function sendMessage(content) {
		const newMessages = [
			...messages,
			{
				role: 'user',
				content: content,
			},
		];

		setMessages(newMessages);

		setIsTyping(true);

		const response = await axios.post(`${process.env.TUILLAMA_ENDPOINT}/api/chat`, {
			model: 'llama3.2',
			messages: newMessages,
			stream: false,
		});

		setIsTyping(false);

		setMessages([
			...newMessages,
			response.data.message,
		]);
	}

	return (
		<Box flexDirection="column" width={'100%'} height={'100%'}>
			<Box flexDirection="column" width={'100%'} height={'100%'}>
				{[...messages.map((e) => (
					<Message {...e}/>
				)), ...[isTyping ? [<Message typing={true}/>] : []]]}
			</Box>
			<Box
				width={'100%'}
				height={3}
				borderColor={'white'}
				borderStyle={'round'}
				flexDirection="row"
				paddingLeft={1}
				gap={2}
			>
				<TextInput
					placeholder="Send a message, silly :P"
					onSubmit={sendMessage}
				/>
			</Box>
		</Box>
	);
}
