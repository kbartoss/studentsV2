import { useRef, useState } from 'react'
import DropdownIcon from '../icons/DropdownIcon'
import { StyledSelect } from '../styles/Select.styles'
import useClickOutside from '../hooks/useClickOutside'

function Select() {
	const options = [1, 2, 3, 4, 5, 6]

	const ref = useRef()
	const [selectIsOpen, setSelectIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(options[0])

	const handleOptionClick = (option: any) => {
		setSelectedOption(option)
	}

	const toggleSelect = () => {
		setSelectIsOpen(prevIsSelectOpen => !prevIsSelectOpen)
	}

	useClickOutside(ref, () => setSelectIsOpen(false))

	return (
		<StyledSelect onClick={toggleSelect} ref={ref}>
			<DropdownIcon />
			<div className="selected-option">{selectedOption}</div>
			{selectIsOpen && (
				<div className="options">
					{options.map(option => (
						<div
							key={option}
							className={`option ${option === selectedOption ? 'selected' : ''}`}
							onClick={() => handleOptionClick(option)}>
							{option}
						</div>
					))}
				</div>
			)}
		</StyledSelect>
	)
}
export default Select
