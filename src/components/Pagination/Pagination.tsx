import { StyledPagination } from './Pagination.styles'
import Select from '../Select/Select'

const Pagination = ({ studentsNumber, allStudentsNumber, itemsPerPage, currentPage, setCurrentPage }: any) => {
	const options = [10, 20, 30, 40]

	const handleOptionChange = (option: any) => {}

	const totalPages = Math.ceil(allStudentsNumber / itemsPerPage)

	const getPageNumbers = () => {
		let pageNumbers = []

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
		setCurrentPage(pageNumber)
	}

	return (
		<>
			{allStudentsNumber > 0 && (
				<StyledPagination>
					<div className="dropdown">
						<p>Pokaż:</p>
						<div className="select-container">
							<Select options={options} initialOption={10} onOptionChange={handleOptionChange} />
						</div>
						<p>
							{studentsNumber} z {allStudentsNumber} uczniów
						</p>
					</div>
					<div className="pagination">
						<button className="side" onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
							Poprzednia
						</button>
						{getPageNumbers().map((pageNumber, index) => (
							<button
								key={index}
								className={pageNumber === currentPage ? 'active' : ''}
								onClick={() => handlePageClick(pageNumber)}>
								{pageNumber}
							</button>
						))}
						<button
							className="side"
							onClick={() => handlePageClick(currentPage + 1)}
							disabled={currentPage === totalPages}>
							Następna
						</button>
					</div>
				</StyledPagination>
			)}
		</>
	)
}

export default Pagination
