import type { Meta, StoryObj } from '@storybook/angular'

import { EndingScreenComponent } from './ending-screen.component'

const meta: Meta<EndingScreenComponent> = {
    title: 'Pages/Ending Screen',
    component: EndingScreenComponent,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
}

export default meta
type Story = StoryObj<EndingScreenComponent>;

export const Primary: Story = {
    args: {
    },
}