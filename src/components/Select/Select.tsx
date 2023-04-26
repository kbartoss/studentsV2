import { forwardRef } from 'react'
import { useRef, useState } from 'react'
import DropdownIcon from '../../icons/DropdownIcon/DropdownIcon'
import { Option, Options, StyledSelect } from './Select.styles'
import useClickOutside from '../../hooks/useClickOutside'
import { mergeRefs } from 'react-merge-refs'
import { SelectProps } from '../../theme/types'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectIsOpen } from '../../redux/features/students/studentsSlice'
import { RootState } from '../../redux/store'

const Select = forwardRef(({ onOptionChange = () => {}, initialOption, options, onChange }: SelectProps, ref) => {
	const selectRef: React.MutableRefObject<HTMLElement | null> = useRef(null)
	const [selectedOption, setSelectedOption] = useState(initialOption)

	const selectIsOpen = useSelector((state: RootState) => state.students.selectIsOpen)

	const dispatch = useDispatch()

	const handleOptionClick = (option: string) => {
		setSelectedOption(option)
		onOptionChange(parseInt(option, 10))
	}

	const toggleSelect = () => {
		dispatch(setSelectIsOpen(!selectIsOpen))
	}

	useClickOutside(selectRef, () => dispatch(setSelectIsOpen(false)))

	return (
		<StyledSelect onClick={toggleSelect} onChange={onChange} ref={mergeRefs([selectRef, ref])} selectIsOpen={selectIsOpen}>
			<DropdownIcon selectIsOpen={selectIsOpen} />
			<div>
				<span>{selectedOption}</span>
			</div>
			{selectIsOpen && (
				<Options>
					{options.map(option => (
						<Option key={option} onClick={() => handleOptionClick(option)}>
							<span>{option}</span>
						</Option>
					))}
				</Options>
			)}
		</StyledSelect>
	)
})
export default Select
