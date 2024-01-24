
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

export const Tips: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Tips',
    color: 'yellow',
    
  },
};

export const Start: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Start',
    color: 'blue',
  },
};

export const Confirm: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Confirm',
    color: 'blue',
  },
};

export const VeryEasy: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Very easy',
    color: 'blue',
    
  },
};

export const Easy: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Easy',
    color: 'green',
    
  },
};

export const Medium: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Medium',
    color: 'yellow',
    
  },
};

export const Hard: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Hard',
    color: 'red',
    
  },
};

export const Extreme: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Extreme',
    color: 'black',
    
  },
};

export const Return: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Return',
    color: 'none',
    
  },
};

export const Exit: ButtonComponentStory = {
  ...Template,
  args: {
    label: 'Exit',
    
  },
};





