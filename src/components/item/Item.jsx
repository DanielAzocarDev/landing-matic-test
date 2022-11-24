
import './Item.scss'

export const Item = ({ icon, title, description }) => {
  return (
    <div className='item'>
      <div className='item__image'>
        <img className='item__icon' src={icon} alt="" />
      </div>
      <h3 className='item__title'>{title}</h3>
      <p className='item__description'>{description}</p>
    </div>
  )
}
