import Box from './Box'
import { useBox } from '../context/box-context'

const BoxList = () => {
  const { state } = useBox()
  return (
    <div className="container">
      <Box type="box-1" state={state.firstBox} />
      <Box type="box-2" state={state.secondBox} />
    </div>
  )
}

export default BoxList
