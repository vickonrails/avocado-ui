import React from 'react'
import { User, Mail } from 'react-feather'
import '@testing-library/jest-dom'
import { render } from '../../utils/test-utils'
import { Link } from '../'

describe('Link', () => {
  test('renders correctly', () => {
    const testId = `link`
    const { getByTestId } = render(
      <Link href='/' data-testid={testId}>
        Hey There
      </Link>
    )

    expect(getByTestId(testId)).toBeInTheDocument()
  })

  test('renders correct link type', () => {
    const testIdDefault = `link-default`
    const testIdSolid = `link-solid`
    const testIdOutline = `link-outline`
    const testIdGhost = `link-ghost`

    const { getByTestId } = render(
      <>
        <Link data-testid={testIdDefault} type='default' href='/'>
          Link Here
        </Link>
        <Link data-testid={testIdSolid} type='solid' href='/'>
          Link Here
        </Link>
        <Link data-testid={testIdOutline} type='outline' href='/'>
          Link Here
        </Link>
        <Link data-testid={testIdGhost} type='ghost' href='/'>
          Link Here
        </Link>
      </>
    )

    expect(getByTestId(testIdDefault)).toHaveClass('avocado-link__default')
    expect(getByTestId(testIdSolid)).toHaveClass('avocado-link__solid')
    expect(getByTestId(testIdOutline)).toHaveClass('avocado-link__outline')
    expect(getByTestId(testIdGhost)).toHaveClass('avocado-link__ghost')
  })

  test('should render empty Link without errors', () => {
    const testId = `link`

    const { getByTestId } = render(
      <Link data-testid={testId} href='/'>
        Link Item
      </Link>
    )
    expect(getByTestId(testId)).toBeValid()
  })

  test('should render appropriate Link shape', () => {
    const testIdSquare = `link-square`
    const testIdCurve = `link-curve`
    const testIdRound = `link-round`

    const { getByTestId } = render(
      <>
        <Link data-testid={testIdSquare} href='/' shape='square' type='outline'>
          Link
        </Link>
        <Link data-testid={testIdCurve} href='/' shape='curve' type='outline'>
          Link
        </Link>
        <Link data-testid={testIdRound} href='/' shape='round' type='outline'>
          Link
        </Link>
      </>
    )

    expect(getByTestId(testIdSquare)).toHaveStyle('border-radius:0')
    expect(getByTestId(testIdCurve)).toHaveStyle('border-radius:4px')
    expect(getByTestId(testIdRound)).toHaveStyle('border-radius:10000px')
  })

  test('should throw error if href is not passed', () => {
    const testId = `link`
    // render Link without href prop in try/catch and expect the error message to be identical to the error message thrown
    try {
      render(<Link data-testid={testId}>Link Without href</Link>)
    } catch (err) {
      expect(err.message).toEqual(
        'The href prop is compulsory. Please pass in a value for the href prop'
      )
    }
  })

  test('should render prefix & suffix Icons correctly', () => {
    const testIdPrefix = `link-prefix-icon`
    const testIdSuffix = `link-suffix-icon`

    const { getByTestId } = render(
      <>
        <Link prefixIcon={<Mail data-testid={testIdPrefix} />} href='/'>
          Hey Link
        </Link>
        <Link suffixIcon={<Mail data-testid={testIdSuffix} />} href='/'>
          Hey Link
        </Link>
      </>
    )

    expect(getByTestId(testIdPrefix)).toBeInTheDocument()
    expect(getByTestId(testIdSuffix)).toBeInTheDocument()
  })
})
