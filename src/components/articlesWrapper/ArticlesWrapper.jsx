
import './ArticlesWrapper.scss'

export const ArticlesWrapper = ({ children, title, subtitle }) => {
  return (
    <div className="wrapper">
      <h2 className="wrapper__title">{title}</h2>
      <p className="wrapper__subtitle">{subtitle}</p>
      {children}
    </div>
  )
}
