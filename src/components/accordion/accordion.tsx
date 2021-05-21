import React, { FC } from 'react'
import { Disclosure } from '@headlessui/react'

const { Button, Panel } = Disclosure

const Accordion: FC<any> = (props) => {
  return <Disclosure {...props} />
}

const AccordionButton: FC<any> = Button
// interface AccordionButtonProps {}

const AccordionPanel: FC<any> = (props) => {
  return (
    <span>
      <Button>{props.heading}</Button>
      <Panel>{props.children}</Panel>
    </span>
  )
}
// interface AccordionPanelProps {}

export { Accordion, AccordionButton, AccordionPanel }
