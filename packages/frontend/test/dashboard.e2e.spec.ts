import { expect, test } from '@playwright/test'

test('display day order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('100', { exact: true })).toBeVisible()
  await expect(
    page.getByText('-5% em relação a ontem', { exact: true }),
  ).toBeVisible()
})

test('display month order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('150', { exact: true })).toBeVisible() // 150 is the amount
  await expect(
    page.getByText('+20% em relação ao mês passado', { exact: true }),
  ).toBeVisible()
})

test('display cancelled order amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('150', { exact: true })).toBeVisible()
  await expect(
    page.getByText('+7% em relação ao mês passado', { exact: true }),
  ).toBeVisible()
})

test('display revenue amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await expect(
    page.locator('span').filter({ hasText: 'R$ 200,00' }),
  ).toBeVisible()
  await expect(
    page.getByText('+10% em relação ao mês passado', { exact: true }),
  ).toBeVisible()
})
