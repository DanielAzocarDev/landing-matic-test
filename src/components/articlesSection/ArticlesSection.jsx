import { useEffect, useState } from "react"
import { ArticlesApi } from "../../api"
import { ArticleCard } from "../articleCard/ArticleCard"
import { Button } from "../button/Button"
import { ItemsList } from "../itemsList/ItemsList"

import './ArticlesSection.scss'

export const ArticlesSection = () => {

  const [articles, setArticles] = useState([])

  const getArticles = async () => {
    try {
      const { data } = await ArticlesApi.get('/articles')

      const sortedDesc = data.data.sort(
        (objA, objB) => new Date(objB.createdAt) - new Date(objA.createdAt)
      )

      setArticles(sortedDesc.slice(0, 4))
    } catch (error) {
      console.log(error, 'Error')
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  console.log(articles)
  return (
    <section className="articles">
      <div className="articles__container">
        <div className="articles__header">
          <h2 className="articles__title">Latest Articles</h2>
          <Button>+ Add New Article</Button>
        </div>
        <ItemsList>
          {articles.map(article => <ArticleCard image={article.imageUrl} author={article.author} title={article.title} content={article.content} />)}
        </ItemsList>
      </div>
    </section>
  )
}
