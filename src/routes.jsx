import React from 'react'
import { Routes, Route, BrowserRouter, useLocation, Navigate, } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';

function RequireAuth({ children }) {
  let location = useLocation();
  const { isLogged } = useSelector(selectUser);

  if (isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

import App from './App';
import Login from './pages/Login';

const RoutesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/expenses" element={<div style={{ padding: "1rem" }}>
        <p>expenses here!</p>
      </div>} />
      <Route path="/invoices" element={<main style={{ padding: "1rem" }}>
        <p>expenses invoices!</p>
      </main>} />
      <Route path="*" element={<main style={{ padding: "1rem" }}>
        <p>There's nothing here!</p>
      </main>} />
      <Route path="/privado" element={<RequireAuth><main style={{ padding: "1rem" }}>
        <p>privado here!</p>
      </main></RequireAuth>} />
    </Routes>
  </BrowserRouter>
)

export default RoutesApp;
