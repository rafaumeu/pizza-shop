import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { OrderProvider } from './contexts/order-context'
import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <OrderProvider>
          <Toaster richColors />
          <Helmet titleTemplate="%s | Pizza Shop" />
          <RouterProvider router={router} />
        </OrderProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
