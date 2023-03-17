import React from "react";
import "./login.css";

export default function Home() {
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={"https://benjiro.ir"}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}