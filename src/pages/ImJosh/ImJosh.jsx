// LoginForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// 1) Define your validation schema with Yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(6, 'At least 6 characters')
        .required('Required'),
});

export default function ImJosh() {
return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                // 2) Simulate an async login call
                setSubmitting(true);
                setTimeout(() => {
                alert(`Logging in with:\nEmail: ${values.email}\nPassword: ${values.password}`);
                setSubmitting(false);
                resetForm();
                }, 1000);
            }}
        >
        {({ isSubmitting }) => (
            <Form className="login-form">
            {/* Email field */}
            <label htmlFor="email">Email</label>
            <Field
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="input"
            />
            <ErrorMessage name="email">
                {msg => <div className="error">{msg}</div>}
            </ErrorMessage>

            {/* Password field */}
            <label htmlFor="password">Password</label>
            <Field
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input"
            />
            <ErrorMessage name="password">
                {msg => <div className="error">{msg}</div>}
            </ErrorMessage>

            {/* Submit button */}
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in…' : 'Log In'}
            </button>
            </Form>
        )}
        </Formik>
    );
}