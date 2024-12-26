import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do Estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu Nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('11999999999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  await page.waitForLoadState('networkidle')
  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  expect(toast).toBeVisible()
  await page.waitForTimeout(5000)
})
test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do Estabelecimento').fill('Invalid Name')
  await page.getByLabel('Seu Nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('11999999999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Erro ao cadastrar restaurante')

  expect(toast).toBeVisible()
})
test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
