import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" />
        <Route path="contact" />
        <Route path="blog" />
        <Route path="careers" />
      </Route>
    </Routes>
  )
}
