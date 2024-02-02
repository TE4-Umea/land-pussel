import type { Meta, StoryObj } from '@storybook/angular'

import { ReplayComponent } from './replay.component'

const meta: Meta<ReplayComponent> = {
    title: 'Pages/Replay',
    component: ReplayComponent,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
}

export default meta
type Story = StoryObj<ReplayComponent>;

export const Primary: Story = {
    args: {
    },
}