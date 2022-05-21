/* Login request and response */
export interface SignInInput {
    username: string;
    password: string;
}

export const SignInInputInitValues: SignInInput = {
	username: '',
	password: '',
}
/* Login request and response */


/* Forgot password request and response */
export interface ForgotPasswordInput {
    username: string;
}

export interface ForgotPasswordResponse {
    forgotPassword: null;
}
/* Forgot password request and response */

/* Sign up request and response */
export interface SignUpInput {
    username: string;
    password: string;
    confirmpassword: string;
}

export const SignUpInputInitValues: SignUpInput = {
	username: '',
	password: '',
    confirmpassword: ''
}
/* Login request and response */