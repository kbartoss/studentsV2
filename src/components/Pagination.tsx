import { useState } from 'react'
import InputArrow from '../icons/InputArrow'
import { StyledPagination } from '../styles/Pagination.styles'

const Pagination = ({ studentsNumber, allStudentsNumber, itemsPerPage = 10}: any) => {
	const totalPages = Math.ceil(allStudentsNumber / itemsPerPage)

	const [currentPage, setCurrentPage] = useState(1)

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
							<select>
								<option value="10">10</option>
								<option value="20">20</option>
								<option value="30">30</option>
								<option value="40">40</option>
							</select>
							<InputArrow />
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
