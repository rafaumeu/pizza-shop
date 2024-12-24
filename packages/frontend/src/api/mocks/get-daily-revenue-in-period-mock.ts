import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '@/api/get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '2021-09-01',
      receipt: 10000,
    },
    {
      date: '2021-09-02',
      receipt: 20000,
    },
    {
      date: '2021-09-03',
      receipt: 30000,
    },
    {
      date: '2021-09-04',
      receipt: 40000,
    },
    {
      date: '2021-09-05',
      receipt: 50000,
    },
    {
      date: '2021-09-06',
      receipt: 60000,
    },
    {
      date: '2021-09-07',
      receipt: 70000,
    },
  ])
})
