import { createContext, useContext, useMemo, useState } from 'react'

import type { Order, OrderStatus } from '@/types/order'
import { VALID_TRANSITIONS } from '@/types/order'
import { MOCK_ORDERS } from '@/lib/order-store'

interface OrderFilters {
  orderId?: string
  customerName?: string
  status?: OrderStatus | 'all'
  page: number
  perPage: number
}

interface OrderContextType {
  orders: Order[]
  filteredOrders: Order[]
  filters: OrderFilters
  setFilters: (filters: OrderFilters) => void
  updateOrderStatus: (orderId: string, newStatus: OrderStatus) => void
  getOrderById: (orderId: string) => Order | undefined
  totalCount: number
  totalPages: number
}

const OrderContext = createContext<OrderContextType | null>(null)

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS)
  const [filters, setFilters] = useState<OrderFilters>({
    page: 0,
    perPage: 10,
  })

  const filteredOrders = useMemo(() => {
    let result = [...orders]

    if (filters.orderId) {
      result = result.filter((o) =>
        o.id.toLowerCase().includes(filters.orderId!.toLowerCase()),
      )
    }

    if (filters.customerName) {
      result = result.filter((o) =>
        o.customerName
          .toLowerCase()
          .includes(filters.customerName!.toLowerCase()),
      )
    }

    if (filters.status && filters.status !== 'all') {
      result = result.filter((o) => o.status === filters.status)
    }

    return result
  }, [orders, filters.orderId, filters.customerName, filters.status])

  const paginatedOrders = useMemo(() => {
    const start = filters.page * filters.perPage
    return filteredOrders.slice(start, start + filters.perPage)
  }, [filteredOrders, filters.page, filters.perPage])

  const totalCount = filteredOrders.length
  const totalPages = Math.ceil(totalCount / filters.perPage) || 1

  function updateOrderStatus(orderId: string, newStatus: OrderStatus) {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id !== orderId) return order
        const validNext = VALID_TRANSITIONS[order.status]
        if (!validNext.includes(newStatus)) return order
        return { ...order, status: newStatus }
      }),
    )
  }

  function getOrderById(orderId: string) {
    return orders.find((o) => o.id === orderId)
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        filteredOrders: paginatedOrders,
        filters,
        setFilters,
        updateOrderStatus,
        getOrderById,
        totalCount,
        totalPages,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrders() {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider')
  }
  return context
}
