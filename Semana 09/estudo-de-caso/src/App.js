import './App.css'
import Button from './components/Button/Button'
import Text from './components/Text/Text'

function App() {
  return (
    <div className="container">
      <Button variant="solid" onClick={() => console.log('clicou')}>
        Texto do Botão
      </Button>
      <Button variant="outlined">Texto do Botão 2</Button>
      <Button variant="solid" isLoading>
        Texto do botão 3
      </Button>
      <Button disabled variant="solid">
        Texto do botão 4
      </Button>
      <Button disabled variant="outlined">
        Texto do botão 5
      </Button>
      <Text fontSize="sm">Texto Pequeno</Text>
      <Text>Texto Médio</Text>
      <Text className="text-red" as="h1" fontSize="lg">
        Texto Grande
      </Text>
    </div>
  )
}

export default App
