import type { Meta, StoryObj } from '@storybook/angular'

import { TileComponent } from '../app/tile/tile.component'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TileComponent> = {
    title: 'Components/Tile',
    component: TileComponent,
    tags: ['autodocs'],
    render: (args: TileComponent) => ({
        props: {
            ...args,
        },
    }),
}

export default meta
type Story = StoryObj<TileComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
    },
}
