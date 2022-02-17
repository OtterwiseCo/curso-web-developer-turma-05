import './Button.css'

const Button = (props) => {
  const { children, variant, isLoading, disabled, ...rest } = props

  console.log(rest) // {onClick:function}

  return (
    <button
      disabled={disabled || isLoading}
      className={`button button__${variant}`}
      {...rest} //onClick = {onClick}
    >
      {isLoading ? 'carregando...' : children}
    </button>
  )
}

export default Button
