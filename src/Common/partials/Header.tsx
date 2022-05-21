import React, { FunctionComponent, ReactNode } from 'react';

import './index.scss';

interface HeaderProps {
  	children?: ReactNode;
}

export const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {	
	const { children } = props;
	return (
		<header>
			{children}
		</header>
	);
};