import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Googlelogin = () => {
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    // You can access the response token and user info here
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
    // Handle login failure
  };

  return (
    <GoogleLogin
      clientId=" 61380153530-uejf06tecavetdp2mj2s9e5cpidd0v8m"  // Replace with your Google Client ID
      buttonText="Login with Google"
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default Googlelogin;
