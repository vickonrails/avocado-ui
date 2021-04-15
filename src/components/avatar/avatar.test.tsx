import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Avatar } from './avatar'

describe('Avatar', () => {
  // Ensure components renders without errors
  test('should render correctly', () => {
    const testId = 'avatar'
    const { getByTestId } = render(<Avatar data-testid={testId} />)
    const node = getByTestId(testId)

    expect(node).toBeInTheDocument()
  })

  /* 
    Ensure Avatar renders the appropriate size
  */
  test('renders correct size', () => {
    // outline different classes
    const testIdSmaller = 'avatar-xs'
    const testIdSmall = 'avatar-sm'
    const testIdMedium = 'avatar-md'
    const testIdLarge = 'avatar-lg'
    const testIdLarger = 'avatar-xl'

    const { getByTestId } = render(
      <>
        <Avatar data-testid={testIdSmaller} size='xs' />
        <Avatar data-testid={testIdSmall} size='sm' />
        <Avatar data-testid={testIdMedium} size='md' />
        <Avatar data-testid={testIdLarge} size='lg' />
        <Avatar data-testid={testIdLarger} size='xl' />
      </>
    )

    expect(getByTestId(testIdSmaller)).toHaveClass(`avocado-avatar__xs`)
    expect(getByTestId(testIdSmall)).toHaveClass(`avocado-avatar__sm`)
    expect(getByTestId(testIdMedium)).toHaveClass(`avocado-avatar__md`)
    expect(getByTestId(testIdLarge)).toHaveClass(`avocado-avatar__lg`)
    expect(getByTestId(testIdLarger)).toHaveClass(`avocado-avatar__xl`)
  })

  /* 
    Ensure Avatar renders the initials of the `name` value when src is not specified
  */

  test('renders initials of `name` prop when `src` and `icon` is not specified', () => {
    const testId = 'avatar'

    const { getByText } = render(
      <Avatar data-testid={testId} name='John Doe' />
    )

    expect(getByText('JD')).toBeInTheDocument()
  })

  /* 
    Ensure Avatar renders an image when `src` is provided
  */
  test('renders an image when `src` is valid', () => {
    const testId = 'avatar'

    const { getByRole } = render(
      <Avatar
        data-testid={testId}
        src='https://avatars.githubusercontent.com/u/24235881?s=400&u=b1882b58273cf6d184b35b10ef1520a429b6ebc7&v=4'
        name='John Doe'
      />
    )

    expect(getByRole('img')).toBeInTheDocument()
  })

  /* 
    Ensure an Icon is rendered when the `icon` prop is provided
  */
  test('renders an icon when icon is provided without src', () => {
    const testId = 'avatar'
    const Icon = () => <p data-testId={testId}>Something</p>

    const { getByTestId } = render(<Avatar name='John Doe' icon={<Icon />} />)

    expect(getByTestId(testId)).toBeInTheDocument()
  })

  /* 
    Ensure Avatar renders the initials of the `name` value when src is not specified
  */

  test('renders `name` as value of `alt` when `alt` value is not provided', () => {
    const name = 'John Doe'
    const testId = 'avatar'

    const { getByAltText } = render(
      <Avatar
        name={name}
        src='https://avatars.githubusercontent.com/u/24235881?s=400&u=b1882b58273cf6d184b35b10ef1520a429b6ebc7&v=4'
        data-testid={testId}
      />
    )
    expect(getByAltText(name)).toBeInTheDocument()
  })
})
