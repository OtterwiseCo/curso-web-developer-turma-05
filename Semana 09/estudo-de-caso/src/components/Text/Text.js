import './Text.css'

const Text = (props) => {
  const { children, fontSize = 'md', as = 'p', className = '' } = props
  const Component = as

  return (
    <Component className={`font-${fontSize} ${className}`}>
      {children}
    </Component>
  )
}

export default Text
