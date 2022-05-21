import React, { FunctionComponent, ReactNode } from 'react';

import { AuthLayoutProps } from '../../Types';

const AuthLayout: FunctionComponent<AuthLayoutProps> = (props: AuthLayoutProps) => {
	const { children } = props;
	return (
		<div className="app-area">
			<div className="main-area">
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;