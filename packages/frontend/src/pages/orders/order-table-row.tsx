import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'

import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { OrderTableRowProps } from '@/pages/orders/orders'

import { OrderStatus } from '../../components/order-status'
import { Button } from '../../components/ui/button'
import { TableCell, TableRow } from '../../components/ui/table'
import { OrderDetails } from './order-details'
export function OrderTableRow({ order }: OrderTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xm">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do Pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails open={isDetailsOpen} orderId={order.orderId} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mon text-xm font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(new Date(order.createdAt), {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {(order.total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xm">
          <ArrowRight className="mr-2 h-3 w-3" />
          {order.status === 'pending' ? 'Processar' : 'Entregar'}
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xm">
          <X className="mr-2 h-3 w-3" />
          {order.status === 'pending' ? 'Cancelar' : 'Remover'}
        </Button>
      </TableCell>
    </TableRow>
  )
}
