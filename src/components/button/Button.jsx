
import './Button.scss'

export const Button = ({ children, actions }) => {
  return (
    <button className='button' onClick={actions}>{children}</button>
  )
}
