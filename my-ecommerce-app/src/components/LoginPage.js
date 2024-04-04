// LoginPage.js
import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const switchForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    // Function to handle login form submission
    const handleLogin = (userData) => {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (response.ok) {
                // Handle successful login
                console.log('Login successful');
                // You can redirect the user to another page upon successful login if needed
            } else {
                // Handle login error
                console.error('Login failed');
                // You can display an error message to the user
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            // Handle network error or other issues
        });
    };

    // Function to handle signup form submission
    const handleSignup = (userData) => {
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (response.ok) {
                // Handle successful signup
                console.log('Signup successful');
                // You can redirect the user to another page upon successful signup if needed
            } else {
                // Handle signup error
                console.error('Signup failed');
                // You can display an error message to the user
            }
        })
        .catch(error => {
            console.error('Error during signup:', error);
            // Handle network error or other issues
        });
    };

    return (
        <div>
            <Header />
            {showLoginForm ? (
                <LoginForm switchToSignup={switchForm} onSubmit={handleLogin} />
            ) : (
                <SignupForm switchToLogin={switchForm} onSubmit={handleSignup} />
            )}
            <Footer />
        </div>
    );
};

export default LoginPage;
