import type { Meta, StoryObj } from '@storybook/angular';

import { CheckboxComponent } from './tile.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CheckboxComponent> = {
  title: 'Components/Tile',
  component: CheckboxComponent,
  tags: ['autodocs'],
  render: (args: CheckboxComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
