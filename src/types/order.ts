export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'delivering'
  | 'delivered'
  | 'canceled'

export interface OrderProduct {
  id: string
  name: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  customerId: string
  customerName: string
  customerPhone: string
  customerEmail: string
  status: OrderStatus
  products: OrderProduct[]
  total: number
  createdAt: Date
}

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: 'Pendente',
  processing: 'Em Preparo',
  delivering: 'Em Entrega',
  delivered: 'Entregue',
  canceled: 'Cancelado',
}

export const ORDER_STATUS_COLORS: Record<
  OrderStatus,
  { dot: string; text: string }
> = {
  pending: {
    dot: 'bg-slate-400',
    text: 'text-muted-foreground',
  },
  processing: {
    dot: 'bg-amber-500',
    text: 'text-amber-600 dark:text-amber-400',
  },
  delivering: {
    dot: 'bg-sky-500',
    text: 'text-sky-600 dark:text-sky-400',
  },
  delivered: {
    dot: 'bg-emerald-500',
    text: 'text-emerald-600 dark:text-emerald-400',
  },
  canceled: {
    dot: 'bg-rose-500',
    text: 'text-rose-600 dark:text-rose-400',
  },
}

export const VALID_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  pending: ['processing', 'canceled'],
  processing: ['delivering', 'canceled'],
  delivering: ['delivered', 'canceled'],
  delivered: [],
  canceled: [],
}

export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMinutes = Math.floor(diffMs / 60000)

  if (diffMinutes < 1) return 'Agora mesmo'
  if (diffMinutes < 60) return `Há ${diffMinutes} minutos`
  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) return `Há ${diffHours} hora(s)`
  const diffDays = Math.floor(diffHours / 24)
  return `Há ${diffDays} dia(s)`
}
