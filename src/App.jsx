
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FaqPage from './pages/FaqPage'
import InvestorsPage from './pages/InvestorsPage'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/investors" element={<InvestorsPage />} />
      </Routes>
    </>
  )
}
