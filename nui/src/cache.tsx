import { useNuiEvent } from 'fivem-nui-react-lib';
import React, { useState, useContext, createContext } from 'react';

interface Context {
	visibility: boolean;
	setVisible: (show: boolean) => void;
}

const ResourceContext = createContext<Context>(undefined);

export default function cache({ children }) {
	const [visibility, setVisible] = useState<boolean>(false);

	useNuiEvent('your-resource', 'setVisible', setVisible);

	const value = {
		visibility,
		setVisible
	}

	return <ResourceContext.Provider value={value}>{children}</ResourceContext.Provider>
}

export const useVisible = () => {
	const { visibility, setVisible } = useContext(ResourceContext);
	return { visibility, setVisible }
}
