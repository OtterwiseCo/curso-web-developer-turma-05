import React from 'react'
import { useEffect } from 'react'
import { listPets } from '../services/pets'

export default function ProtectedPage() {
  useEffect(() => {
    const request = async () => {
      const response = await listPets()
      console.log(response)
    }

    request()
  })

  return <div>Rota Privada</div>
}
