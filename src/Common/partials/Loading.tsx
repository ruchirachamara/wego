import React, { FunctionComponent } from 'react';
import { Spin } from 'antd';

import { LoadingOutlined }  from '@ant-design/icons';

const Loading: FunctionComponent = () => (
	<div style={{ 
		display: "flex",
		padding: "4rem 0rem",
		justifyContent: "center",
		alignItems: "center",
	}}>
		<Spin indicator={(<LoadingOutlined style={{ fontSize: 24 }} spin />)} />
	</div>
);

export default Loading;