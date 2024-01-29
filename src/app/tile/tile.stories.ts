import type { Meta, StoryObj } from '@storybook/angular'

import { TileComponent } from './tile.component'

const meta: Meta<TileComponent> = {
    title: 'Pages/Tile',
    component: TileComponent,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
}

export default meta
type Story = StoryObj<TileComponent>;

export const Primary: Story = {
    args: {
    },
}