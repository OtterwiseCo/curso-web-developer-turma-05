import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const schema = yup.object({
  name: yup.string().required('Nome do carro é obrigatório'),
  brand: yup.string().required('Marca do carro é obrigatório'),
  color: yup.string().required('Cor do carro é obrigatório'),
  type: yup.string().required('Tipo do carro é obrigatório'),
})

const saveData = (id, data) => {
  localStorage.setItem(`car-${id}`, JSON.stringify(data))
}

const getData = (id) =>
  new Promise((resolve) => {
    setTimeout(
      () => resolve(JSON.parse(localStorage.getItem(`car-${id}`))),
      2000
    )
  })

export default function Form() {
  const { id } = useParams()
  const [notFound, setNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(!!id)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    if (id) {
      saveData(id, data)
      toast.success('Carro atualizado com sucesso')
    } else {
      saveData(3, data)
      toast.success('Carro criado com sucesso')
      reset()
    }
  }

  useEffect(() => {
    const request = async () => {
      const data = await getData(id)
      setIsLoading(false)
      if (!data) {
        setNotFound(true)
        return
      }
      Object.entries(data).forEach(([key, value]) => setValue(key, value))
    }
    if (id) {
      request()
    }
  }, [id, setValue])

  if (notFound) {
    return <h1>Carro não encontrado!</h1>
  }

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome do Carro: <input type="text" {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <select defaultValue="" {...register('brand')}>
          <option value="" disabled hidden>
            Selecione a marca
          </option>
          <option value="BMW">BMW</option>
          <option value="fiat">Fiat</option>
          <option value="volkswagen">Volkswagen</option>
          <option value="mercedez">Mercedez</option>
        </select>
        {errors.brand && <span>{errors.brand.message}</span>}
        <label>
          Cor do carro: <input {...register('color')} />
          {errors.color && <span>{errors.color.message}</span>}
        </label>
        <label>
          Tipo do carro: <input {...register('type')} />
          {errors.type && <span>{errors.type.message}</span>}
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
