import { StyledGrade } from '../styles/Grade.styles'

type GradeProps = {
	value: number
}

const Grade = ({ value }: GradeProps) => {
	const gradeColor = (grade: number) => {
		if (grade >= 5) {
			return '#2FCD15'
		} else if (grade >= 3) {
			return '#EAE000'
		} else {
			return '#E84A35'
		}
	}

	return (
		<StyledGrade style={{ backgroundColor: gradeColor(value) }} className="grade">
			{value}
		</StyledGrade>
	)
}

export default Grade
