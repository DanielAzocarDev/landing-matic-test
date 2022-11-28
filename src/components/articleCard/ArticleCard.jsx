
import './ArticleCard.scss'

export const ArticleCard = ({ image, title, author, content }) => {
  return (
    <div className='article'>
      <div className='article__image'>
        <img className='article__photo' src={image} alt="" />
      </div>
      <div className='article__info'>
        <h6 className='article__author'>{`By ${author}`}</h6>
        <h3 className='article__title'>{title}</h3>
        <p className='article__content'>{content}</p>
      </div>
    </div>
  )
}
