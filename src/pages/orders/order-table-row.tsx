import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '../../components/ui/button'
import { TableCell, TableRow } from '../../components/ui/table'
export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xm">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do Pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mon text-xm font-medium">
        asdfdasfadfad
      </TableCell>
      <TableCell className="text-muted-foreground"> há 15 minutos </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Rafael Dias Zendron</TableCell>
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
  )
}
