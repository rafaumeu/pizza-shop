import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChangeCallBack = vi.fn()
describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallBack.mockClear()
  })
  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPages={10}
        onPageChange={onPageChangeCallBack}
      />,
    )

    expect(
      wrapper.getByText((content) => {
        return content.startsWith('Página') && content.endsWith('de 20')
      }),
    ).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })
  it('should be to navigate to the next page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPages={10}
        onPageChange={onPageChangeCallBack}
      />,
    )
    const nextPageButton = wrapper.getByRole('button', {
      name: /próxima página/i,
    })
    await user.click(nextPageButton)
    expect(onPageChangeCallBack).toHaveBeenCalledWith(1)
  })
  it('should be to navigate to the previous page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={1}
        totalCount={200}
        perPages={10}
        onPageChange={onPageChangeCallBack}
      />,
    )
    const previousPageButton = wrapper.getByRole('button', {
      name: /página anterior/i,
    })
    await user.click(previousPageButton)
    expect(onPageChangeCallBack).toHaveBeenCalledWith(0)
  })
  it('should be to navigate to the first page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={1}
        totalCount={200}
        perPages={10}
        onPageChange={onPageChangeCallBack}
      />,
    )
    const firstPageButton = wrapper.getByRole('button', {
      name: /primeira página/i,
    })
    await user.click(firstPageButton)
    expect(onPageChangeCallBack).toHaveBeenCalledWith(0)
  })
  it('should be to navigate to the last page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={1}
        totalCount={200}
        perPages={10}
        onPageChange={onPageChangeCallBack}
      />,
    )
    const lastPageButton = wrapper.getByRole('button', {
      name: /última página/i,
    })
    await user.click(lastPageButton)
    expect(onPageChangeCallBack).toHaveBeenCalledWith(19)
  })
})
