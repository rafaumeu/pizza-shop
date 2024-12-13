import './global.css'

import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>Pizza Shop</h1>
      <Button>Add to cart</Button>
    </div>
  )
}
