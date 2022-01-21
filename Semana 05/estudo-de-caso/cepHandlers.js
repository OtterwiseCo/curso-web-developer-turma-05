import { input } from 'console-input'
import axios from 'axios'

export const inputCep = () => input('Digite seu cep: ')

export const searchFromCep = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return data
  } catch (error) {
    console.log('Ocorreu um erro')
  }
}
