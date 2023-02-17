import { ButtonHTMLAttributes, useMemo } from 'react'
import { useVisualEdit } from 'react-bricks'
import { Text, types } from 'react-bricks/frontend'
import { COLOR_VARIANTS } from '../constants/colors'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this primary button, will have primary colors
   */
  primary?: boolean
  /**
   * Is this the secondary button, will have secondary color
   */
  secondary?: boolean
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button Title
   */
  title?: string
  /**
   * Make the button uppercase
   */
  uppercase?: boolean
  /**
   * Optional click handler
   */
  onClick?: () => void
}

const Button: types.Brick<IButtonProps> = ({
  title = 'Button',
  primary,
  secondary,
  size,
  uppercase = false,
  children,
  ...props
}) => {
  // Getting memoized size classes from the useMemo hook
  const sizeClassNames = useMemo(() => {
    if (size === 'small') {
      return 'px-2 py-1 text-[10px]'
    }
    if (size === 'large') {
      return 'px-6 py-3 text-xl'
    }
    return 'px-4 py-2 text-sm'
  }, [size])

  // this hook helps us to check if we are currently editing this component
  // editMode[2] returns true of false based on that
  const editMode = useVisualEdit(title)

  return (
    <button
      aria-label="Button"
      {...props}
      // if primary is true, then button will be primary, if
      // secondary is true, then button will have secondary color
      // otherwise it will just have the default color
      className={`${sizeClassNames} ${
        primary
          ? COLOR_VARIANTS['primary']
          : secondary
          ? COLOR_VARIANTS['secondary']
          : COLOR_VARIANTS['default']
      } ${
        uppercase ? 'uppercase' : 'capitalize'
      } mx-2 my-1 rounded-lg font-semibold`}
    >
      {editMode[2] ? (
        children ?? title
      ) : (
        <Text
          propName="title"
          renderBlock={({ children }) => (
            <h1 className="text-xl font-semibold">{children ?? title}</h1>
          )}
          placeholder="Type a title..."
          // multiline={false} : boolean
          // softLineBreak={false} : boolean
        />
      )}
    </button>
  )
}

Button.schema = {
  name: 'button',
  label: 'Button',
  getDefaultProps: () => ({
    title: 'Button',
    primary: true,
  }),
  sideEditProps: [
    {
      name: 'title',
      label: 'Button',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'primary',
      label: 'Primary Button',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'secondary',
      label: 'Secondary Button',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'size',
      label: 'Size',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          {
            label: 'Large',
            value: 'large',
          },
          {
            label: 'Medium',
            value: 'medium',
          },
          {
            label: 'Small',
            value: 'small',
          },
        ],
      },
    },
  ],
}

export default Button
