import React from "react"
import ReactDom from "react-dom"
import { App } from './App';
import { NuiProvider } from 'fivem-nui-react-lib';
import cache from "./src/cache";

ReactDom.render(
	<cache>
		<NuiProvider resource="your-resource-name">
			<App />
		</NuiProvider>
	</cache>,
	document.getElementById('app')
)
