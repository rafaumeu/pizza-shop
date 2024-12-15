import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'

const data = [
  {
    date: '10/12',
    revenue: 140.5,
  },
  {
    date: '11/12',
    revenue: 125.75,
  },
  {
    date: '12/12',
    revenue: 180.3,
  },
  {
    date: '13/12',
    revenue: 160.9,
  },
  {
    date: '14/12',
    revenue: 220.6,
  },
  {
    date: '15/12',
    revenue: 250.4,
  },
  {
    date: '16/12',
    revenue: 190.25,
  },
  {
    date: '17/12',
    revenue: 280.8,
  },
]
export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="items-center-justify-between flex-row pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey={'revenue'}
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
