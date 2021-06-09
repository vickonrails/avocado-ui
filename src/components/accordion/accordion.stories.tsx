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
    <AccordionPanel header='Say What'>
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
