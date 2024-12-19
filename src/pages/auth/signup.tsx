import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerRestaurant } from '@/api/register-restaurant'
import { Input } from '@/components/ui/input'

import { Button } from '../../components/ui/button'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()
  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })
  async function handleSignUp(data: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        phone: data.phone,
        email: data.email,
      })
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Restaurante cadastrado com suceso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante')
    }
  }
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6" />
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta gratis
          </h1>
          <p className="text-sm text-muted-foreground">
            Seja um parceiro e comece suas vendas
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
            <Input
              id="restaurantName"
              type="restaurantName"
              {...register('restaurantName')}
            />
            <Label htmlFor="managerName">Seu nome</Label>
            <Input
              id="managerName"
              type="managerName"
              {...register('managerName')}
            />
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
            <Label htmlFor="phone">Seu celular</Label>
            <Input id="phone" type="tel" {...register('phone')} />
          </div>
          <Button disabled={isSubmitting} className="w-full" type="submit">
            Finalizar cadastro
          </Button>
          <p className="text-auted-foreground px-6 text-center text-sm leading-relaxed">
            Ao continuar, você concorda com nossos{' '}
            <a className="underline underline-offset-4" href="#">
              Termos de serviço
            </a>{' '}
            e{' '}
            <a className="underline underline-offset-4" href="#">
              políticas de privacidade
            </a>
          </p>
        </form>
      </div>
    </>
  )
}
