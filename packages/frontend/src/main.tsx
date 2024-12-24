import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { enableMSW } from '@/api/mocks/index.ts'

import { App } from './App.tsx'

enableMSW().then(() => {
  const rootElement = document.getElementById('root')
  if (!rootElement) throw new Error('Root element not found')
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
