import { RootState } from '../../redux/store'
import { StartText, StyledStart } from './Start.styles'
import { useSelector } from 'react-redux'

const Start = () => {
	const isOpen = useSelector((state: RootState) => state.students.isOpen)

	return (
		<StyledStart isOpen={isOpen}>
			<img src="/src/images/start-img.png" alt="Animated image of person sitting next to desk and using laptop" />
			<StartText>Witamy w panelu administratora.</StartText>
		</StyledStart>
	)
}

export default Start
