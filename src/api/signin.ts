import { api } from "@/lib/axios"

export type SignInBody = {
  email: string
}
export async function signin({email}: SignInBody) {
  await api.post('/authenticate', {email})
}