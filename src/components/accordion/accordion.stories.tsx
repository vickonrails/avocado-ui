import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Accordion, Text, AccordionPanel } from '../../components'
import { Heading } from '../heading'

export default {
  title: 'Components/Accordion',
  component: Accordion
} as Meta

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
