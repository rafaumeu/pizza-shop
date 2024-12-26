import { expect, test } from '@playwright/test'

test('update store profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'John Doe' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  await page.getByLabel('Nome').fill('Rocket Pizza')
  await page.getByRole('button', { name: 'Salvar' }).click()
  await page.waitForLoadState('networkidle')
  const toast = page.getByText('Perfil atualizado com sucesso')
  await page.getByRole('button', { name: 'Close' }).click()
  expect(toast).toBeVisible()
  expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()
})
test('update store profile with error', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'John Doe' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  await page.getByLabel('Nome').fill('Invalid Name')
  await page.getByRole('button', { name: 'Salvar' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Falha ao atualizar perfil tente novamente')
  await page.getByRole('button', { name: 'Close' }).click()

  expect(toast).toBeVisible()
  expect(page.getByRole('button', { name: 'John Doe' })).toBeVisible()
})
