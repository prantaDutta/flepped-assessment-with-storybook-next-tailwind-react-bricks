import Button from '@/components/Button'
import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Primary: Story = {
  args: {
    primary: true,
    title: 'Button',
  },
}

// A simple test to check whether the button is rendered properly or not
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const button = canvas.getByLabelText('Button')

  expect(button).toBeTruthy()
}

export const Secondary: Story = {
  args: {
    secondary: true,
    title: 'Button',
  },
}
