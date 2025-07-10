// ╔═════════════════════════════════════════════════════════════════════════════╗
// ║ 🧪 App.test.jsx – Testes de Renderização da Aplicação URBZToken            ║
// ║ 🎯 Foco: estabilidade estrutural e regressão visual básica                 ║
// ║ 📦 Frameworks: Jest + Testing Library + JSDOM                              ║
// ╚═════════════════════════════════════════════════════════════════════════════╝

import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App.jsx'

describe('🧪 App.jsx', () => {
  test('Renderiza a página inicial corretamente', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    // Aguarda a presença do conteúdo da HomePage (lazy-loaded)
    const tituloHero = await screen.findByText(/URBZToken/i)
    expect(tituloHero).toBeInTheDocument()
  })

  test('Renderiza a rota de investidores', async () => {
    render(
      <MemoryRouter initialEntries={['/investidores']}>
        <App />
      </MemoryRouter>
    )

    const tituloInvestidores = await screen.findByText(/Investidores URBZToken/i)
    expect(tituloInvestidores).toBeInTheDocument()
  })
})
