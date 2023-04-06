import { Route, Routes } from 'react-router-dom'
import AddEditStudent from '../pages/AddEditStudent/AddEditStudent'
import Start from '../pages/StartPage/Start'
import Students from '../pages/Students/Students'
import { IsOpenProps } from '../theme/types'

function CustomRoutes({ isOpen }: IsOpenProps) {
	return (
		<Routes>
			<Route path="/" element={<Start isOpen={isOpen} />} />
			<Route path="/students" element={<Students isOpen={isOpen} />} />
			<Route path="/students/add" element={<AddEditStudent />} />
			<Route path="/students/:studentId/*" element={<AddEditStudent isEdit />} />
		</Routes>
	)
}

export default CustomRoutes
