import React from 'react'
import { useLocation } from 'react-router-dom';
import './notfound.css'

export default function Notfound() {
    const location = useLocation();
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>Requested URL: <strong>{location.pathname}</strong></p>
      <a href="/" className="back-home">Go Back Home</a>
    </div>
  )
}
