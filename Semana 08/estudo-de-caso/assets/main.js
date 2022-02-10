// [x] Montar o formulário do site com as informações de cep, nome da rua, número, complemento, bairro, estado e cidade
// [x] Implementar comportamento de término de digitação de CEP, buscar esse cep na API do Via CEP
// [] Realizar o preenchimento dos campos de endereço assim que o retorno voltar da API do Via CEP

const getInput = (name) => {
  const element = document.getElementsByName(name)
  if (element && element.length) {
    return element[0]
  }
  return null
}

const getInfoFromCep = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return data
  } catch (error) {
    alert(error)
  }
}

window.onload = () => {
  const cepInput = getInput('cep')

  cepInput.addEventListener('input', async (event) => {
    try {
      const cep = event.target.value
      if (cep.length === 8) {
        cepInput.setAttribute('disabled', true)
        const response = await getInfoFromCep(cep)

        if (response.erro) {
          throw new Error('Cep inválido')
        }

        const street = getInput('street')
        street.value = response.logradouro

        const neighborhood = getInput('neighborhood')
        neighborhood.value = response.bairro

        const city = getInput('city')
        city.value = response.localidade

        const state = getInput('state')
        state.value = response.uf
      }
    } catch (error) {
      alert(error.message)
    } finally {
      cepInput.removeAttribute('disabled')
    }
  })
}
