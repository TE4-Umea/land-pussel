import type { Meta, StoryObj } from '@storybook/angular'

import { CreditsComponent } from './credits.component'

const meta: Meta<CreditsComponent> = {
    title: 'Pages/Credits',
    component: CreditsComponent,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
}

export default meta
type Story = StoryObj<CreditsComponent>;

export const Primary: Story = {
    args: {
    },
}