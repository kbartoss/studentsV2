import { forwardRef } from 'react'
import { InputTitle, StyledInput } from './Input.styles'

const Input = forwardRef(({ name, title, placeholder, ...rest }: any, ref) => {
	return (
		<>
			<InputTitle>{title}</InputTitle>
			<StyledInput name={name} placeholder={placeholder} {...rest} ref={ref} />
		</>
	)
})
export default Input
