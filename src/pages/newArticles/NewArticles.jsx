
import { ArticlesSection } from '../../components/articlesSection/ArticlesSection'
import { ArticlesWrapper } from '../../components/articlesWrapper/ArticlesWrapper'
import './NewArticles.scss'

export const NewArticles = () => {
  return (
    <div className="newArticle">
      <ArticlesWrapper title='Add New Blog Article' subtitle='Publish a new blog article to feature in the Easybank homepage.'>
        <form className="newArticle__form">
          <div className="newArticle__inputField">
            <label className="newArticle__label" htmlFor="author">Author</label>
            <input className="newArticle__input" type="text" name="author" id="author" />
          </div>
          <div className="newArticle__inputField">
            <label className="newArticle__label" htmlFor="title">Blog Title</label>
            <input className="newArticle__input" type="text" name="title" id="title" />
          </div>
          <div className="newArticle__inputField">
            <label className="newArticle__label" htmlFor="content">Blog Content</label>
            <textarea className="newArticle__textarea" name="content" id="content" cols="30" rows="28"></textarea>
          </div>

          <button className='newArticle__button'>
            Save
          </button>
        </form>
      </ArticlesWrapper>

      <ArticlesWrapper title='Previous Articles' subtitle='Review and edit previous blog posts published on to the homepage.'>
        <div>hola</div>
      </ArticlesWrapper>

      <ArticlesSection />
    </div>
  )
}
