import React, { FC, ImgHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { getInitials } from '../../utils/avatar'
import { avatarTheme } from '../../components/theme/components/avatar.theme'
import { Shape, Size } from '../../utils/types'

// Avatar component
const Avatar: FC<AvatarProps> = ({ className, alt, name, ...props }) => {
  // Notice the name is always rendered as the `title` of the avatar to reveal more information on hover
  const _className = className
    ? `avocado-avatar avocado-avatar__${props.size} ${className}`
    : `avocado-avatar avocado-avatar__${props.size}`

  // render an image avatar if there's a `src` prop
  // return and end excution here
  if (props.src)
    return (
      <StyledAvatar
        {...props}
        title={name}
        className={_className}
        alt={alt || name}
      />
    )

  // render an icon if no `src` prop but `icon` exists
  if (props.icon)
    return (
      <StyledAvatarSpan
        title={name}
        className={_className}
        role='img'
        aria-label={name}
        {...props}
      >
        <span>{props.icon}</span>
      </StyledAvatarSpan>
    )

  // finally render the initials of the name supplied
  return (
    <StyledAvatarInitials
      title={name}
      className={_className}
      aria-label={name}
      {...props}
    >
      <span>{name && getInitials(name)}</span>
    </StyledAvatarInitials>
  )
}

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * initials of the `name` string are rendered when there are no values for `src` and `icon`
   */
  name?: string

  /**
   * specifies the size of the avatar image or box
   */
  size?: Size | number

  /**
   * specifies the icon to render when there's no value for image source (`src`)
   */
  icon?: JSX.Element

  /**
   * shape controls the curvature of the avatar border radius> It can be either set to "round", "curve", "square"
   */

  shape?: Shape

  /**
   * background color for avatar with icon or initials
   */

  bgColor?: string
}

const StyledAvatarBase = ({ size, shape, bgColor }: AvatarProps) =>
  size &&
  shape &&
  css`
    margin: 0;
    padding: 0;
    pointer: cursor;

    height: ${size && typeof size === 'number'
      ? `${size}`
      : size && avatarTheme.sizes[size]}px;

    width: ${size && typeof size === 'number'
      ? `${size}`
      : size && avatarTheme.sizes[size]}px;

    text-align: center;
    border-radius: ${avatarTheme.radius[shape]};
    display: flex;
    object-fit: cover;
    background: ${bgColor};
    color: #fff;
    cursor: pointer;
    user-select: none;
    font-size: ${typeof size === 'number'
      ? size / 2
      : avatarTheme.fontSizes[size]}px;
  `

const StyledAvatar = styled.img`
  ${StyledAvatarBase}
`

const StyledAvatarInitials = styled.span`
  ${StyledAvatarBase}

  span {
    margin: auto;
  }
`

const StyledAvatarSpan = styled.span`
  ${StyledAvatarBase}

  span {
    margin: auto;
    display: block;
    width: 70%;
    height: 70%;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`

Avatar.defaultProps = {
  size: 'md',
  shape: 'round',
  bgColor: avatarTheme.bgColor
}

export { Avatar }
