import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth-context'

export default function AuthStatus() {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.user) {
    return <p>Você não está logado</p>
  }
  return (
    <p>
      Bem vindo {auth.user.name}!
      <button onClick={() => auth.logout(() => navigate('/'))}>Sair </button>
    </p>
  )
}
