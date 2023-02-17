import { TextInputGroup } from '@/components/TextInputGroup'
import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

const meta: Meta<typeof TextInputGroup> = {
  title: 'Components/TextInputGroup',
  component: TextInputGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof TextInputGroup>

export const Default: Story = {}
export const TextGroupLeft: Story = {
  args: {
    leftElement: <p>Price</p>,
  },
}

// A simple test to check whether the props are rendering properly or not for left element
TextGroupLeft.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  // checking if left element rendered or not
  const leftElement = canvas.getByText('Price')
  await expect(leftElement).toBeTruthy()
}

export const TextGroupRight: Story = {
  args: {
    rightElement: <p>Dollars</p>,
  },
}

// A simple test to check whether the props are rendering properly or not for right element
TextGroupRight.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  // checking if left element rendered or not
  const rightElement = canvas.getByText('Dollars')
  await expect(rightElement).toBeTruthy()
}

export const TextGroupLeftAndRight: Story = {
  args: {
    leftElement: <p>Price</p>,
    rightElement: <p>Dollars</p>,
  },
}
