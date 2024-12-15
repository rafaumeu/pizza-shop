import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Button } from '../../components/ui/button'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>
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
              {Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Button variant="outline" size="xm">
                      <Search className="h-3 w-3" />
                      <span className="sr-only">Detalhes do Pedido</span>
                    </Button>
                  </TableCell>
                  <TableCell className="font-mon text-xm font-medium">
                    asdfdasfadfad
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {' '}
                    há 15 minutos{' '}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-400" />
                      <span className="font-medium text-muted-foreground">
                        Pendente
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    Rafael Dias Zendron
                  </TableCell>
                  <TableCell className="font-medium">R$149,90</TableCell>
                  <TableCell>
                    <Button variant="outline" size="xm">
                      <ArrowRight className="mr-2 h-3 w-3" />
                      Aprovar
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="xm">
                      <X className="mr-2 h-3 w-3" />
                      Cancelar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
