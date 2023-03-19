import React from "react";
import "./login.css";
import {useNavigate} from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /contacts
    navigate('/signup');
  };

  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo"
      />
      <div>
        <button className="login-btn" onClick={navigateToLogin}>LOG IN</button>
      </div>
    </div>
  );
}