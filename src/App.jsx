import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages'
import { NewArticles } from './pages/newArticles/NewArticles'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Home />} />
        <Route path="contact" element={<Home />} />
        <Route path="blog" element={<Home />} />
        <Route path="careers" element={<Home />} />
        <Route path="new-article" element={<NewArticles />} />
      </Route>
    </Routes>
  )
}
