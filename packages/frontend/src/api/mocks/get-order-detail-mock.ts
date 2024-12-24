import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '@/api/get-order-details'

export const getOrderDetailMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: null,
    },
    createdAt: new Date().toISOString(),
    status: 'pending',
    orderItems: [
      {
        id: 'order-item-1',
        product: {
          name: 'Product A',
        },
        priceInCents: 100,
        quantity: 2,
      },
      {
        id: 'order-item-2',
        product: {
          name: 'Product B',
        },
        priceInCents: 200,
        quantity: 1,
      },
    ],
    totalInCents: 300,
  })
})
