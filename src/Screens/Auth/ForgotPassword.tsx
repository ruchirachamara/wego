import React, { FunctionComponent } from 'react';
import { Form, Input, Button, message, Row, Typography } from 'antd';
import { Formik, FormikErrors, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import { ForgotPasswordInput } from '../../Types';
import { cardStyle } from '../../Common/styled-components/card';
import { SIZE } from '../../Common/themes';
import AuthLayout from '../../Common/containers/AuthLayout';
import signInAvatar from '../../Common/assets/sign-in-avatar.jpeg';
import './index.scss';

const { Text, Title } = Typography;

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const ForgotPassword: FunctionComponent = () => {

	const validate = (values: ForgotPasswordInput): FormikErrors<ForgotPasswordInput> => {
		const errors: FormikErrors<ForgotPasswordInput> = {};
		if (!values.username) {
			errors.username = 'Username is required!';
		} else if (!emailRegex.test(values.username)) {
			errors.username = 'Invalid username!';
		}
		return errors;
	};

	const submitForm = async(credentials: ForgotPasswordInput) => {
		try {
			// Assume this is the API call for the forgot password functionality
		} catch (e: any) {
			console.log(e);
            message.success(e.message, 3);
		}
	};

	return (
		<AuthLayout>
			<div className="container">				
				<Formik
					initialValues={{
						username: ''
					}}
					validate={validate}
					onSubmit={submitForm}
				>
					{({
						values,
						errors,
						handleChange,
						handleSubmit,
					}) => (
						<Form 
							colon={false}
							layout='vertical'
							className='loginForm'
							onFinish={handleSubmit}								
						>
							<div className='card login__common--card login__common--card--extended' style={cardStyle}>
								<div className='login__box-top'>
									<Title level={3}>Welcome Back!</Title>
									<Text type='secondary'>Enter Username to continue</Text>
								</div>
								<div className='login__box-bottom'>
									<Row className='login__avatar--wrapper'>
										<img src={signInAvatar} />
									</Row>
									<Row className='login__input--wrappers'>
										<Form.Item
											label='Enter Username'
											validateStatus={errors.username ? 'error' : ''}
										>
											<Input
												size={SIZE}
												name='username'
												onChange={handleChange}
												style={{
													minWidth: 383
												}}
											/>
											<ErrorMessage name='username'>{() => <div style={{ color: "red", textAlign: "left" }}>{errors.username}</div>}</ErrorMessage>
										</Form.Item>
									</Row>
									<Row className='login__input--wrappers'>
										<Form.Item colon={false}>
											<Row>
												<Button
													type='primary'
													htmlType='submit'
													size={SIZE}
													block
													className='auth__common--btn'
												>
													Request Password
												</Button>
											</Row>
										</Form.Item>
									</Row>
									<div className='text__center'>
										<Link to='/sign-in'>Already sign in?</Link>
									</div>

								</div>
							</div>
						</Form>
					)}
				</Formik>
			</div>
        </AuthLayout>
	);
};

export default ForgotPassword;