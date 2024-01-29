
import { ButtonComponentComponent } from './button-component.component'
import { StoryObj, Meta } from '@storybook/angular'
//import imageFile from 'src/app/button-component/exit.png';

export default {
    title: 'Components/Button',
    component: ButtonComponentComponent,
} as Meta<ButtonComponentComponent>



type ButtonComponentStory = StoryObj<ButtonComponentComponent>;
const Template: ButtonComponentStory = {
    args: {},
}


export const Tips: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Tips😀',
        color: 'smallYellow',
        
    },
}

export const Start: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Start',
        color: 'blue',
    },
}

export const Credits: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Credits',
        color: 'blue',
    },
}

export const Highscore: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Highscore',
        color: 'blue',
    },
}

export const Confirm: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Confirm',
        color: 'blue',
    },
}

export const VeryEasy: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Very easy',
        color: 'blue',

    },
}

export const Easy: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Easy',
        color: 'green',

    },
}

export const Medium: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Medium',
        color: 'yellow',

    },
}

export const Hard: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Hard',
        color: 'red',

    },
}

export const Extreme: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Extreme',
        color: 'black',

    },
}

export const Return: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Return',
        color: 'none',

    },
}

export const Exit: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'EXIT',
        color: 'none',

    },
}

export const Restart: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'RESTART',
        color: 'none',

    },
}

export const Back: ButtonComponentStory = {
    ...Template,
    args: {
        label: 'Back',
        color: 'white',

    },
}





