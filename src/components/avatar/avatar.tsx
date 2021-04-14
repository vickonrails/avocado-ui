import React, { FC, ImgHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { getInitials } from '../../utils/avatar'

// Avatar component
const Avatar: FC<AvatarProps> = ({ className, ...props }) => {
  // Notice the name is always rendered as the `title` of the avatar to reveal more information on hover
  const _className = className
    ? `avocado-avatar ${className}`
    : `avocado-avatar`

  // render an image avatar if there's a `src` prop
  // return and end excution here
  if (props.src)
    return <StyledAvatar {...props} title={props.name} className={_className} />

  // render an icon if no `src` prop but `icon` exists
  if (props.icon)
    return (
      <StyledAvatarSpan
        title={props.name}
        className={_className}
        role='img'
        aria-label={props.name}
      >
        <span>{props.icon}</span>
      </StyledAvatarSpan>
    )

  // finally render the initials of the name supplied
  return (
    <StyledAvatarInitials
      title={props.name}
      className={_className}
      aria-label={props.name}
    >
      <span>{props.name && getInitials(props.name)}</span>
    </StyledAvatarInitials>
  )
}

type Size = string

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * initials of the `name` string are rendered when there are no values for `src` and `icon`
   */
  name: string

  /**
   * specifies the size of the avatar image or box
   */
  size?: Size

  /**
   * specifies the icon to render when there's no value for image source (`src`)
   */
  icon?: JSX.Element
}

const StyledAvatarBase = css`
  margin: 0;
  padding: 0;

  pointer: cursor;
  height: 32px;
  width: 32px;
  text-align: center;
  border-radius: 200px;
  display: flex;
  background: red;
  color: #fff;
  cursor: pointer;
  user-select: none;
  font-size: 0.85em;
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

export { Avatar }
