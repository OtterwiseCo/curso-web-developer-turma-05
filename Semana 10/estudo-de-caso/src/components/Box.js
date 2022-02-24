import './Box.css'
import { useBox } from '../context/box-context'

const Box = (props) => {
  const { state, type } = props
  const { dispatch } = useBox()

  return (
    <div className="box">
      {state.map((button) => (
        <button
          className="button"
          onClick={() => dispatch({ type: type, id: button.id })}
        >
          <span>{button.name}</span>
        </button>
      ))}
    </div>
  )
}

export default Box
