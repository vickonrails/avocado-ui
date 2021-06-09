import React, { FC, HTMLAttributes, createContext, useContext } from 'react'
import styled from '@emotion/styled'
import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'react-feather'

import { accordionTheme } from '../theme/components/accordion.theme'
import { Flex } from '../../components'

const { Button, Panel } = Disclosure

const AccordionContext = createContext<AccordionBaseProps | null>(null)

const { Provider } = AccordionContext

const Accordion: FC<AccordionProps> = ({
  children,
  className,
  size,
  width,
  fullWidth,
  showIcon,
  iconPosition,
  ...props
}) => {
  const _className = className
    ? `avocado-accordion ${className}`
    : `avocado-accordion`

  const accordionValues = {
    size,
    width,
    fullWidth,
    showIcon,
    iconPosition
  }

  return (
    <Provider value={accordionValues}>
      <StyledAccordion
        className={_className}
        width={width}
        fullWidth={fullWidth}
        {...props}
      >
        {children}
      </StyledAccordion>
    </Provider>
  )
}

const AccordionButton: FC = Button

const AccordionPanel: FC<AccordionPanelProps> = ({
  children,
  className,
  header,
  ...props
}) => {
  const context = useContext(AccordionContext)
  const { iconPosition, showIcon, size } = context as AccordionBaseProps

  const _className = className
    ? `avocado-accordion_panel ${className}`
    : `avocado-accordion_panel`

  return (
    <Disclosure>
      <StyledDisclosure
        className={_className}
        {...props}
        size={size}
        iconPosition={iconPosition}
        showIcon={showIcon}
      >
        <Button className='avocado-accordion_panel__button'>
          <Flex alignItems='center' justifyContent='space-between' gap={0}>
            {header}
            <ChevronDown className='avocado-accordion_panel__icon' />
          </Flex>
        </Button>
        <Panel className='avocado-accordion_panel__content'>{children}</Panel>
      </StyledDisclosure>
    </Disclosure>
  )
}

interface AccordionPanelProps
  extends HTMLAttributes<HTMLElement>,
    Omit<AccordionBaseProps, 'width' | 'fullWidth'> {
  /**
   * header - component/text to show on the Accordion Button
   */
  header: string | JSX.Element
}

const StyledDisclosure = styled.div<AccordionBaseProps>`
  display: block;
  width: 100%;
  border-bottom: 1px solid ${accordionTheme.border};

  .avocado-accordion_panel__button {
    cursor: pointer;
    width: 100%;
    text-align: left;
    background: inherit;
    border: none;
    padding: ${({ size }) => size && `${accordionTheme.sizes[size].margin} 0`};
    user-select: none;
    font-size: ${({ size }) => size && accordionTheme.sizes[size].fontSize};
  }
  .avocado-accordion_panel__content {
    background: ${accordionTheme.panelBackground};
    font-size: ${({ size }) => size && accordionTheme.sizes[size].fontSize};
    margin: 0;
    padding: 0.85em;
  }

  .avocado-accordion_panel__icon {
    height: 1em;
  }
`

const StyledAccordion = styled.div<AccordionProps>`
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : width)};
  font-size: ${({ size }) => size && accordionTheme.sizes[size].fontSize};
  margin-bottom: 1.5em;

  button {
    font-size: inherit;
  }
`

type AccordionSize = 'sm' | 'md' | 'lg'
type AccordionBaseProps = {
  /**
   * size - size of the Accordion component
   */
  size?: AccordionSize

  /**
   * width - width of the Accordion component in px
   */
  width?: string

  /**
   * fullWidth - when set to true, Accordion stretches to fill horizontal space
   */
  fullWidth?: boolean

  /**
   * showIcon - should Accordion show chevron icon
   */
  showIcon?: boolean

  /**
   * iconPosition - position of Accordion header icon
   */
  iconPosition?: 'left' | 'right'
}
interface AccordionProps
  extends HTMLAttributes<HTMLElement>,
    AccordionBaseProps {}

Accordion.defaultProps = {
  size: 'md',
  width: '20em',
  iconPosition: 'right',
  fullWidth: false,
  showIcon: true
}

export { Accordion, AccordionButton, AccordionPanel }
