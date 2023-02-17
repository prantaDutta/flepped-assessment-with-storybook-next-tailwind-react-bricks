import { InputHTMLAttributes, ReactElement, ReactNode } from 'react'
import { Text, types, useVisualEdit } from 'react-bricks'

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
  /**
   * The html you want to render before the input field
   */
  leftElement?: ReactElement
  /**
   * The html you want to render after the input field
   */
  rightElement?: ReactElement
}

const TextInputGroup: types.Brick<ITextInputProps> = ({
  leftElement,
  rightElement,
  placeholder = 'Enter Text...',
  ...props
}) => {
  // this hook helps us to check if we are currently editing this component
  // editMode[2] returns true of false based on that
  const editMode = useVisualEdit(leftElement ? leftElement.toString() : '')
  return (
    <div className={`flex items-center justify-center`}>
      {/*Left Element*/}
      {leftElement && (
        <div className={'rounded-l-md bg-gray-200 p-2 font-semibold'}>
          {editMode[2] ? (
            leftElement
          ) : (
            <Text
              propName="leftElement"
              renderBlock={({ children }) => (
                <h1 className="text-xl font-semibold">
                  {children ?? leftElement}
                </h1>
              )}
              placeholder="Type a title..."
              // multiline={false} : boolean
              // softLineBreak={false} : boolean
            />
          )}
        </div>
      )}
      {/*Input*/}
      <div className="">
        <input
          className={`my-2 px-4 py-2 font-semibold text-gray-600 focus:outline-none focus:ring-1 focus:ring-primary-light ${
            leftElement ? '' : 'rounded-l-md'
          } ${rightElement ? '' : 'rounded-r-md'}`}
          placeholder={placeholder}
          {...props}
        />
      </div>
      {/*Right Element*/}
      {rightElement && (
        <div className={'rounded-l-md bg-gray-200 p-2 font-semibold'}>
          {editMode[2] ? (
            rightElement
          ) : (
            <Text
              propName="rightElement"
              renderBlock={({ children }) => (
                <h1 className="text-xl font-semibold">
                  {children ?? rightElement}
                </h1>
              )}
              placeholder="Type a title..."
              // multiline={false} : boolean
              // softLineBreak={false} : boolean
            />
          )}
        </div>
      )}
    </div>
  )
}

TextInputGroup.schema = {
  name: 'textInputGroup',
  label: 'TextInputGroup',
  getDefaultProps: () => ({
    leftElement: '$',
    placeHolder: 'Enter Price',
  }),
  sideEditProps: [
    {
      name: 'leftElement',
      label: 'Left Element',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'rightElement',
      label: 'Right Element',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default TextInputGroup
