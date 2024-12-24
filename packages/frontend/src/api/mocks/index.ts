import { setupWorker } from 'msw/browser'

import { signInMock } from '@/api/mocks/sign-in-mock'
import { env } from '@/env'
export const worker = setupWorker(signInMock)

export async function enableMSW() {
  if (env.MODE !== 'test') return
  await worker.start()
}
