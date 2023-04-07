import { forwardRef } from 'react'
import { InputTitle, StyledInput } from './Input.styles'
import { InputProps } from '../../theme/types'

const Input = forwardRef<HTMLInputElement, InputProps>(({ name, title, placeholder, ...rest }, ref) => {
	return (
		<>
			<InputTitle>{title}</InputTitle>
			<StyledInput name={name} placeholder={placeholder} {...rest} ref={ref} />
		</>
	)
})
export default Input
