import React from 'react'
import { Story, Meta } from '@storybook/react'

import {
  Accordion,
  Heading,
  Box,
  AccordionPanel,
  AccordionProps
} from '../../components'

export default {
  title: 'Components/Accordion',
  component: Accordion
} as Meta

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>
    <AccordionPanel header='One'>
      <Box>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
        aspernatur velit blanditiis nobis magnam amet expedita dolorem!
        Doloremque temporibus, atque eveniet possimus culpa veritatis quia
        perferendis aspernatur maxime earum.
      </Box>
    </AccordionPanel>

    <AccordionPanel header='Two'>
      <Box>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
        aspernatur velit blanditiis nobis magnam amet expedita dolorem!
        Doloremque temporibus, atque eveniet possimus culpa veritatis quia
        perferendis aspernatur maxime earum.
      </Box>
    </AccordionPanel>
  </Accordion>
)

export const Default = Template.bind({})
Default.args = {
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}

export const Sizes = () => (
  <>
    <Heading level='h2' size='xl'>
      Small Sized Heading
    </Heading>
    <Accordion size='sm'>
      <AccordionPanel header='One'>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          perspiciatis praesentium nemo nobis sed, assumenda vitae voluptatum
          rerum, libero, quisquam nostrum aspernatur labore saepe totam iusto
          harum? Quidem, mollitia aspernatur.
        </div>
      </AccordionPanel>
      <AccordionPanel header='Two'>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          perspiciatis praesentium nemo nobis sed, assumenda vitae voluptatum
          rerum, libero, quisquam nostrum aspernatur labore saepe totam iusto
          harum? Quidem, mollitia aspernatur.
        </div>
      </AccordionPanel>
      <AccordionPanel header='Three'>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          perspiciatis praesentium nemo nobis sed, assumenda vitae voluptatum
          rerum, libero, quisquam nostrum aspernatur labore saepe totam iusto
          harum? Quidem, mollitia aspernatur.
        </div>
      </AccordionPanel>
    </Accordion>

    <Heading level='h2' size='xl'>
      Medium Sized Accordion
    </Heading>
    <Accordion size='md'>
      <AccordionPanel header='One'>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          perspiciatis praesentium nemo nobis sed, assumenda vitae voluptatum
          rerum, libero, quisquam nostrum aspernatur labore saepe totam iusto
          harum? Quidem, mollitia aspernatur.
        </div>
      </AccordionPanel>
      <AccordionPanel header='Two'>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          perspiciatis praesentium nemo nobis sed, assumenda vitae voluptatum
          rerum, libero, quisquam nostrum aspernatur labore saepe totam iusto
          harum? Quidem, mollitia aspernatur.
        </div>
      </AccordionPanel>
      <AccordionPanel header='Three'>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          perspiciatis praesentium nemo nobis sed, assumenda vitae voluptatum
          rerum, libero, quisquam nostrum aspernatur labore saepe totam iusto
          harum? Quidem, mollitia aspernatur.
        </div>
      </AccordionPanel>
    </Accordion>

    <Heading level='h2' size='xl'>
      Large Sized Accordion
    </Heading>
    <Accordion size='lg'>
      <AccordionPanel header='One'>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          perspiciatis praesentium nemo nobis sed, assumenda vitae voluptatum
          rerum, libero, quisquam nostrum aspernatur labore saepe totam iusto
          harum? Quidem, mollitia aspernatur.
        </div>
      </AccordionPanel>
      <AccordionPanel header='Two'>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          perspiciatis praesentium nemo nobis sed, assumenda vitae voluptatum
          rerum, libero, quisquam nostrum aspernatur labore saepe totam iusto
          harum? Quidem, mollitia aspernatur.
        </div>
      </AccordionPanel>
      <AccordionPanel header='Three'>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          perspiciatis praesentium nemo nobis sed, assumenda vitae voluptatum
          rerum, libero, quisquam nostrum aspernatur labore saepe totam iusto
          harum? Quidem, mollitia aspernatur.
        </div>
      </AccordionPanel>
    </Accordion>
  </>
)

export const Width = () => (
  <>
    <Heading level='h2' size='xl'>
      10em Width
    </Heading>
    <Accordion width='10em'>
      <AccordionPanel header='One'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Two'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Three'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>
    </Accordion>

    <Heading level='h2' size='xl'>
      30em Width
    </Heading>
    <Accordion width='30em'>
      <AccordionPanel header='One'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Two'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Three'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>
    </Accordion>

    <Heading level='h2' size='xl'>
      Full width
    </Heading>
    <Accordion fullWidth>
      <AccordionPanel header='One'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Two'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Three'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>
    </Accordion>
  </>
)

export const ShowIcon = () => (
  <>
    <Heading level='h2' size='xl'>
      Hide Accordion Icon
    </Heading>
    <Accordion showIcon={false}>
      <AccordionPanel header='One'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Two'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Three'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>
    </Accordion>

    <Heading level='h2' size='xl'>
      Show Accordion Icon
    </Heading>
    <Accordion showIcon>
      <AccordionPanel header='One'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Two'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Three'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>
    </Accordion>
  </>
)

export const IconPosition = () => (
  <>
    <Heading level='h2' size='xl'>
      Left Icon Position
    </Heading>
    <Accordion iconPosition='left'>
      <AccordionPanel header='One'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Two'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Three'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>
    </Accordion>

    <Heading level='h2' size='xl'>
      Right Icon Position
    </Heading>
    <Accordion iconPosition='right'>
      <AccordionPanel header='One'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Two'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>

      <AccordionPanel header='Three'>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          aspernatur velit blanditiis nobis magnam amet expedita dolorem!
          Doloremque temporibus, atque eveniet possimus culpa veritatis quia
          perferendis aspernatur maxime earum.
        </Box>
      </AccordionPanel>
    </Accordion>
  </>
)
