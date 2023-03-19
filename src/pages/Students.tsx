import { useState } from 'react'
import { StyledStudents } from '../styles/Students.styles'
import StudentsHeader from '../components/StudentsHeader'
import StudentsTable from '../components/StudentsTable'

const Students = ({ isOpen }: any) => {
	const [searchQuery, setSearchQuery] = useState<string>('')
	
	return (
		<StyledStudents isOpen={isOpen}>
			<StudentsHeader setSearchQuery={setSearchQuery}/>
			<StudentsTable searchQuery={searchQuery}/>
		</StyledStudents>
	)
}

export default Students
