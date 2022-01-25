//[x] criar uma função para ler a entrada do usuário;
//[x] criar uma função para buscar as informações do cep passado como parâmetro (logradouro, bairro, localidade, uf)
//[x] criar função para salvar os dados em um arquivo
//[x] integrar as funções

import { inputCep, searchFromCep } from './cepHandlers.js'
import saveToJSON from './writeFile.js'

const main = async () => {
  try {
    const cep = inputCep()
    const { logradouro, bairro, localidade, uf } = await searchFromCep(cep)
    const data = {
      logradouro,
      bairro,
      localidade,
      uf,
    }
    saveToJSON(data, 'arquivo.json')
  } catch (error) {
    console.log('Erro')
  }
}

main()
