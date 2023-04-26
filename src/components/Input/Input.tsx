import { InputTitle, StyledInput } from './Input.styles'
import { InputProps } from '../../theme/types'
import { ErrorText } from '../../pages/AddEditStudent/AddEditStudent.styles'

const Input = ({ title, placeholder, error, onChange, value }: InputProps) => {
	return (
		<>
			<InputTitle>{title}</InputTitle>
			<StyledInput placeholder={placeholder} onChange={onChange} value={value} />
			{error && <ErrorText>{error}</ErrorText>}
		</>
	)
}
export default Input
