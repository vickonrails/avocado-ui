import React, { AnchorHTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { css, useTheme } from '@emotion/react'

import { AvocadoThemeProps } from '../../utils/types'
import { ThemeProps } from '../theme'
import { getButtonShape } from '../../utils/button'
import ButtonIcon from '../button/button-icon'

// import { getButtonShape } from '../../utils/button'

const Link: FC<LinkProps> = ({
  children,
  type,
  href,
  className,
  prefixIcon,
  suffixIcon,
  ...props
}) => {
  const _className = className
    ? `avocado-link__${type} ${className}`
    : `avocado-link__${type}`
  const avocadoTheme = useTheme() as ThemeProps

  if (!href)
    throw new Error(
      'The href prop is compulsory. Please pass in a value for the href prop'
    )

  return (
    <StyledLink
      className={_className}
      {...props}
      type={type}
      theme={avocadoTheme}
      href={href}
    >
      {prefixIcon && (
        <ButtonIcon className='link-icon--left'>{prefixIcon}</ButtonIcon>
      )}
      {children}

      {suffixIcon && (
        <ButtonIcon className='link-icon--right'>{suffixIcon}</ButtonIcon>
      )}
    </StyledLink>
  )
}

type LinkType = 'solid' | 'default' | 'ghost' | 'outline'
type LinkShape = 'round' | 'square' | 'curve'
type LinkSize = 'sm' | 'md' | 'lg'
export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    AvocadoThemeProps {
  /**
   * default type of link. Can be submit, link, reset
   */

  type?: LinkType
  /**
   *  size of link. Can be sm, lg, md
   */
  size?: LinkSize
  /**
   * shape of the link. can be round, border, square
   */
  shape?: LinkShape

  /**
   * prefix. Show element to the left of the link
   */
  prefixIcon?: React.ReactNode
  /**
   * prefix. Show element to the right of the link
   */
  suffixIcon?: React.ReactNode
}

// FIXME: currently making use of !important rule here because the documentation styles override Avocado's styles.
// Remove immediately we switch to a different documentation template

const BaseLink = ({ shape, theme, size, type }: LinkProps) =>
  shape &&
  css`
    color: ${theme?.components.linkTheme.variants.primary.default}!important;

    border-radius: ${type !== 'default' && getButtonShape(shape)};

    user-select: none;
    transition: background, color, transform;
    transition-duration: 0.15s;
    transition-timing-function: ease-out;
    user-select: none;
    display: inline-block !important;

    font-size: ${size === 'sm' ? '14px' : `inherit`};

    display: inline-flex;
    align-items: center;

    .link-icon--left,
    .link-icon--right {
      height: 15px;
      width: 15px;

      display: inline-flex;

      svg {
        height: 100%;
        width: 100%;
        margin: auto;
      }
    }

    .link-icon--left {
      margin-right: 0.35em;
    }

    .link-icon--right {
      margin-left: 0.35em;
    }

    :hover {
      color: ${theme?.components.linkTheme.variants.primary.hover} !important;
      text-decoration: none !important;
      transform: translateY(-1px);
    }
    :active,
    :focus {
      outline: none;
      transform: none;
      box-shadow: 0 0 0 3px ${theme?.colors.blue[100]};
    }
  `

const LinkTypeSolid = ({ type, theme }: LinkProps) =>
  type === 'solid' &&
  css`
    background: ${theme?.components.linkTheme.variants.primary.default};
    color: ${theme?.colors.white} !important;
    text-decoration: none !important;

    :hover {
      background: ${theme?.components.linkTheme.variants.primary.hover};
      color: ${theme?.colors.white} !important;
    }
  `

const LinkTypeGhost = ({ type, theme }: LinkProps) =>
  type === 'ghost' &&
  css`
    background: inherit;
    border: 2px solid ${theme?.colors.gray[3]};
    text-decoration: none !important;
    color: ${theme?.components.linkTheme.variants.primary.hover} !important;

    :hover {
      border-color: ${theme?.colors.gray[4]};
    }
  `

const LinkTypeOutline = ({ type, theme }: LinkProps) =>
  type === 'outline' &&
  css`
    background: inherit;
    text-decoration: none !important;
    border: 1px solid ${theme?.components.linkTheme.variants.primary.hover};
    color: ${theme?.components.linkTheme.variants.primary.hover} !important;
  `

const LinkSize = ({ size, type, theme }: LinkProps) =>
  size &&
  type !== 'default' &&
  css`
    padding: ${`${size && theme?.components.linkTheme.size[size]} ${
      size && theme?.components.linkTheme.size[size]
    }`};
  `

const StyledLink = styled.a`
  ${BaseLink}
  ${LinkTypeSolid}
  ${LinkTypeGhost}
  ${LinkTypeOutline}
  ${LinkSize}
`

Link.defaultProps = {
  shape: 'curve',
  type: 'default',
  size: 'md'
}

export { Link }
