
// src/app/my-component/my-component.stories.ts
import { ButtonComponentComponent } from './button-component.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/Button',
  component: ButtonComponentComponent,
} as Meta<ButtonComponentComponent>;

type ButtonComponentStory = StoryObj<ButtonComponentComponent>;
const Template: ButtonComponentStory = {
  args: {},
};

export const Start: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Start',
    size: 'medium',
  },
};

export const Exit: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Exit',
    size: 'small',
  },
};