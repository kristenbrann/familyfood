import type { Meta, StoryObj } from '@storybook/react';

import { AnswerGrid } from "../app/AnswerGrid";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/AnswerGrid',
  component: AnswerGrid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof AnswerGrid>;

export default meta;
type Story = StoryObj<typeof meta>;


export const HiddenList: Story = {
  args: {
    answers: [{
      text: 'Driver\'s license',
      count: 46,
      number: 1
    },{
      text: 'Graduation',
      count: 34,
      number: 2
    },{
      text: 'First date/kiss',
      count: 7,
      number: 3
    },{
      text: 'Prom',
      count: 6,
      number: 4
    },{
      text: 'College',
      count: 4,
      number: 5
    }]
  },
};