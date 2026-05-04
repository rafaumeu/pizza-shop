import { Helmet } from 'react-helmet-async'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useOrders } from '@/contexts/order-context'
import { OrderTableFilters } from '@/pages/orders/order-table-filters'
import { OrderTableRow } from '@/pages/orders/order-table-row'

import { Pagination } from '../../components/pagination'

export function Orders() {
  const { filteredOrders, filters, totalCount } = useOrders()

  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]" />
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]" />
                  <TableHead className="w-[132px]" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <OrderTableRow key={order.id} order={order} />
                ))}
              </TableBody>
            </Table>
          </div>
          <Pagination
            pageIndex={filters.page}
            totalCount={totalCount}
            perPages={filters.perPage}
          />
        </div>
      </div>
    </>
  )
}
