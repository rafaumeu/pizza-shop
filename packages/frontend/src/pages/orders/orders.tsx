import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getOrders } from '@/api/get-orders'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { OrderTableFilters } from '@/pages/orders/order-table-filters'
import { OrderTableRow } from '@/pages/orders/order-table-row'
import { OrderTableSkeleton } from '@/pages/orders/orders-table-skeleton'

import { Pagination } from '../../components/pagination'

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams()
  const orderId = searchParams.get('orderId')
  const status = searchParams.get('status')
  const customerName = searchParams.get('customerName')
  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? 1)
  const { data: result, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['orders', pageIndex, orderId, status, customerName],
    queryFn: () =>
      getOrders({
        pageIndex,
        orderId,
        status: status === 'all' ? null : status,
        customerName,
      }),
  })
  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', String(pageIndex + 1).toString())
      return state
    })
  }
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
                {isLoadingOrders && <OrderTableSkeleton />}
                {result &&
                  result.orders.map((order) => (
                    <OrderTableRow key={order.orderId} order={order} />
                  ))}
              </TableBody>
            </Table>
          </div>
          {result && (
            <Pagination
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPages={result.meta.perPage}
              onPageChange={handlePaginate}
            />
          )}
        </div>
      </div>
    </>
  )
}
