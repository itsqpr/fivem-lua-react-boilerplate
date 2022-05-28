import React from 'react'
import "./global.css"
import { useVisible } from './src/cache'

export function App() {
	const { visibility } = useVisible()

	return (
		<>
			{visibility ? (
				<div className='App'>
					<h1>FiveM Boilerplate</h1>
				</div>
			) : null}
		</>
	)
}


setTimeout(() => {
	window.dispatchEvent(
		new MessageEvent('message', {
			data: {
				app: 'your-resource',
				method: 'setVisible',
				data: true
			}
		})
	)
}, 0)
