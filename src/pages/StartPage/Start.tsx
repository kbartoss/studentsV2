import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { StartText, StyledStart } from './Start.styles'
import strings from '../../constants/strings'

const Start = () => {
	const isOpen = useSelector((state: RootState) => state.students.isOpen)

	return (
		<StyledStart isOpen={isOpen}>
			<img src="/src/images/start-img.png" alt="Animated image of person sitting next to desk and using laptop" />
			<StartText>{strings.startHeaderText}</StartText>
		</StyledStart>
	)
}

export default Start
