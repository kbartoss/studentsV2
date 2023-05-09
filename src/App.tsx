import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { MainPageContainer } from './styles/MainPageConatiner'
import GlobalStyles from './theme/GlobalStyles'
import CustomRoutes from './routes/routes'
import { RootState } from './redux/store'
import { toggleIsOpen } from './redux/features/students/studentsSlice'

function App() {
	const isOpen = useSelector((state: RootState) => state.students.isOpen)
	const dispatch = useDispatch()

	const toggle = () => {
		dispatch(toggleIsOpen())
	}

	return (
		<>
			<GlobalStyles />
			<Navbar toggle={toggle} />
			<MainPageContainer>
				<Sidebar />
				<CustomRoutes />
			</MainPageContainer>
		</>
	)
}

export default App
