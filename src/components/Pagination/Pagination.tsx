import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { Dropdown, PaginationContainer, SelectContainer, SideButton, StyledPagination } from './Pagination.styles'
import Select from '../Select/Select'
import { StateProps } from './Pagination.types'
import { setCurrentPage, setItemsPerPage } from '../../redux/features/students/studentsSlice'
import { PaginationProps } from './Pagination.types'

const Pagination = ({ studentsNumber }: PaginationProps) => {
	const isOpen = useSelector((state: RootState) => state.students.isOpen)
	const dispatch = useDispatch()
	const { allStudentsNumber, itemsPerPage, currentPage, selectIsOpen } = useSelector(
		(state: StateProps) => state.students
	)

	const options = ['10', '20', '30', '40']

	const handleOptionChange = (option: number) => {
		dispatch(setItemsPerPage(option))
	}

	const totalPages = Math.ceil(allStudentsNumber / itemsPerPage)

	const getPageNumbers = () => {
		let pageNumbers: (number | string)[] = []

		if (totalPages > 0) {
			if (totalPages <= 5) {
				pageNumbers = [...Array(totalPages).keys()].map((_, i) => i + 1)
			} else {
				if (currentPage <= 3) {
					pageNumbers = [1, 2, 3, '...', totalPages]
				} else if (currentPage > 3 && currentPage < totalPages - 2) {
					pageNumbers = [1, '...', currentPage, '...', totalPages]
				} else {
					pageNumbers = [1, '...', totalPages - 2, totalPages - 1, totalPages]
				}
			}
		}

		return pageNumbers
	}

	const handlePageClick = (pageNumber: number) => {
		dispatch(setCurrentPage(pageNumber))
	}

	return (
		<>
			{allStudentsNumber > 0 && (
				<StyledPagination isOpen={isOpen}>
					<Dropdown>
						<p>Pokaż:</p>
						<SelectContainer selectIsOpen={selectIsOpen}>
							<Select options={options} initialOption={'10'} onOptionChange={handleOptionChange} />
						</SelectContainer>
						<p>
							{studentsNumber} z {allStudentsNumber} uczniów
						</p>
					</Dropdown>

					<PaginationContainer isOpen={isOpen}>
						<SideButton onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
							Poprzednia
						</SideButton>
						{getPageNumbers().map((pageNumber, index) =>
							pageNumber === '...' ? (
								<span key={index}>{pageNumber}</span>
							) : (
								<button
									key={index}
									className={pageNumber === currentPage ? 'active' : ''}
									onClick={() => handlePageClick(Number(pageNumber))}>
									{pageNumber}
								</button>
							)
						)}
						<SideButton onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
							Następna
						</SideButton>
					</PaginationContainer>
				</StyledPagination>
			)}
		</>
	)
}

export default Pagination
