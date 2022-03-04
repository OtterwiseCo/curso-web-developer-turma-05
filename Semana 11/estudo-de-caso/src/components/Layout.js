import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthStatus from './AuthStatus'

export default function Layout() {
  return (
    <div>
      <AuthStatus />
      <ul>
        <li>
          <Link to="/">Rota Pública</Link>
        </li>
        <li>
          <Link to="/private-page">Rota Privada</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
