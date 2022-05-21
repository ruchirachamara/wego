import React, { FunctionComponent } from 'react';
import { Form, Input, Button, message, Row, Typography } from 'antd';
import { Formik, FormikErrors, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import { SignUpInput, SignUpInputInitValues } from '../../Types';
import { cardStyle } from '../../Common/styled-components/card';
import { SIZE } from '../../Common/themes';
import AuthLayout from '../../Common/containers/AuthLayout';
import signInAvatar from '../../Common/assets/sign-in-avatar.jpeg';
import './index.scss';

const { Text, Title } = Typography;

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const SignUp: FunctionComponent = () => {
	
	const validate = (values: any): FormikErrors<SignUpInput> => {
		const errors: FormikErrors<SignUpInput> = {};
		if (!values.username) {
			errors.username = 'Username is required!';
		} else if (!emailRegex.test(values.username)) {
			errors.username = 'Invalid username!';
		}
		if (!values.password) {
			errors.password = 'Password is required!';
		}
		return errors;
	};

	const submitForm = async(credentials: SignUpInput) => {
		try {
			// Assume this is the API call for the sign up functionality
		} catch (e: any) {
			console.log(e);
            message.success(e.message, 3);
		}
	};

	return (
        <AuthLayout>
			<div className="container">				
				<Formik
					initialValues={SignUpInputInitValues}
					onSubmit={submitForm}
					validate={validate}
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
							<div className='card login__common--card' style={cardStyle}>
								<div className='login__box-top'>
									<Title level={3}>Welcome Back!</Title>
									<Text type='secondary'>Sign Up</Text>
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
										<Form.Item
											label='Enter Password'
											validateStatus={errors.password ? 'error' : ''}
										>
											<Input.Password 
												name='password'
												onChange={handleChange}
												type='password'
												size={SIZE}
												style={{
													minWidth: 383
												}}
												className='auth__login--password'												
											/>
											<ErrorMessage name='password'>{() => <div style={{ color: "red", textAlign: "left" }}>{errors.password}</div>}</ErrorMessage>
										</Form.Item>
									</Row>
									<Row className='login__input--wrappers'>
										<Form.Item
											label='Confirm Password'
											validateStatus={errors.password ? 'error' : ''}
										>
											<Input.Password 
												name='confirmpassword'
												onChange={handleChange}
												type='password'
												size={SIZE}
												style={{
													minWidth: 383
												}}
												className='auth__login--password'												
											/>
											<ErrorMessage name='confirmpassword'>{() => <div style={{ color: "red", textAlign: "left" }}>{errors.confirmpassword}</div>}</ErrorMessage>
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
													Sign Up
												</Button>
											</Row>
										</Form.Item>
									</Row>
								</div>
							</div>
							<div className='text__center login__input--wrappers--bottom'>
								<Text type="secondary">Already sign up ?</Text><Link to='/sign-in'>Sign In</Link>
							</div>
						</Form>
					)}
				</Formik>
			</div>
        </AuthLayout>
	);
};

export default SignUp;