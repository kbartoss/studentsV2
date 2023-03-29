import { forwardRef } from 'react'
import { useRef, useState } from 'react'
import DropdownIcon from '../../icons/DropdownIcon/DropdownIcon'
import { Option, Options, StyledSelect } from './Select.styles'
import useClickOutside from '../../hooks/useClickOutside'
import { mergeRefs } from 'react-merge-refs'

const Select = forwardRef(({ onOptionChange, initialOption, options, field }: any, ref) => {
	const selectRef = useRef()
	const [selectIsOpen, setSelectIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(initialOption)

	const handleOptionClick = (option: any) => {
		setSelectedOption(option)
		onOptionChange(option)
	}

	const toggleSelect = () => {
		setSelectIsOpen(prevIsSelectOpen => !prevIsSelectOpen)
	}

	useClickOutside(selectRef, () => setSelectIsOpen(false))

	return (
		<StyledSelect onClick={toggleSelect} ref={mergeRefs([selectRef, ref])} {...field} selectIsOpen={selectIsOpen}>
			<DropdownIcon selectIsOpen={selectIsOpen} />
			<div>{selectedOption}</div>
			{selectIsOpen && (
				<Options>
					{options.map(option => (
						<Option key={option} onClick={() => handleOptionClick(option)}>
							{option}
						</Option>
					))}
				</Options>
			)}
		</StyledSelect>
	)
})
export default Select
