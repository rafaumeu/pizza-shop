import { ArrowRight, Search, X } from 'lucide-react'

import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import type { Order } from '@/types/order'
import {
  ORDER_STATUS_COLORS,
  ORDER_STATUS_LABELS,
  formatCurrency,
  formatRelativeTime,
  VALID_TRANSITIONS,
} from '@/types/order'
import { getNextStatusLabel } from '@/lib/order-store'
import { useOrders } from '@/contexts/order-context'

import { Button } from '../../components/ui/button'
import { TableCell, TableRow } from '../../components/ui/table'
import { OrderDetails } from './order-details'

interface OrderTableRowProps {
  order: Order
}

export function OrderTableRow({ order }: OrderTableRowProps) {
  const { updateOrderStatus } = useOrders()

  const statusColor = ORDER_STATUS_COLORS[order.status]
  const statusLabel = ORDER_STATUS_LABELS[order.status]
  const nextStatusLabel = getNextStatusLabel(order.status)
  const validNext = VALID_TRANSITIONS[order.status]

  const canApprove = validNext.includes('processing')
  const canDeliver = validNext.includes('delivering')
  const canComplete = validNext.includes('delivered')
  const canCancel = validNext.includes('canceled')

  function handleApprove() {
    if (canApprove) updateOrderStatus(order.id, 'processing')
  }

  function handleDeliver() {
    if (canDeliver) updateOrderStatus(order.id, 'delivering')
  }

  function handleComplete() {
    if (canComplete) updateOrderStatus(order.id, 'delivered')
  }

  function handleCancel() {
    if (canCancel) updateOrderStatus(order.id, 'canceled')
  }

  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xm">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do Pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails order={order} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mon text-xm font-medium">
        {order.id}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatRelativeTime(order.createdAt)}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${statusColor.dot}`} />
          <span className={`font-medium ${statusColor.text}`}>
            {statusLabel}
          </span>
        </div>
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {formatCurrency(order.total)}
      </TableCell>
      <TableCell>
        {nextStatusLabel && (
          <Button
            variant="outline"
            size="xm"
            onClick={
              canApprove
                ? handleApprove
                : canDeliver
                  ? handleDeliver
                  : handleComplete
            }
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            {nextStatusLabel}
          </Button>
        )}
      </TableCell>
      <TableCell>
        {canCancel && (
          <Button variant="ghost" size="xm" onClick={handleCancel}>
            <X className="mr-2 h-3 w-3" />
            Cancelar
          </Button>
        )}
      </TableCell>
    </TableRow>
  )
}
