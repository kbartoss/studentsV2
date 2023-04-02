import { forwardRef } from 'react'
import { InputTitle, StyledInput } from './Input.styles'
import { InputProps } from '../../theme/types'

const Input = forwardRef(({ name, title, placeholder, ...rest }: InputProps, ref) => {
	return (
		<>
			<InputTitle>{title}</InputTitle>
			<StyledInput name={name} placeholder={placeholder} {...rest} ref={ref} />	
		</>
	)
})
export default Input
