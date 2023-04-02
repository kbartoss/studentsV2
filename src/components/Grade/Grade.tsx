import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { StyledGrade } from './Grade.styles'
import { GradeProps } from '../../theme/types'

const Grade = ({ value }: GradeProps) => {
	const { theme } = useContext(ThemeContext)

	const gradeColor = (grade: number) => {
		if (grade >= 5) {
			return theme.grade.high
		} else if (grade >= 3) {
			return theme.grade.mid
		} else {
			return theme.grade.low
		}
	}

	return (
		<StyledGrade style={{ backgroundColor: gradeColor(value) }}>
			{value}
		</StyledGrade>
	)
}

export default Grade
