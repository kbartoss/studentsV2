import InputArrow from '../icons/InputArrow'
import { StyledPagination } from '../styles/Pagination.styles'

const Pagination = () => {
	return (
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
				<p>X z X uczniów</p>
			</div>

			<div className="pagination">
				<button className='side'>Poprzednia</button>
				<button className='active'>1</button>
				<button>2</button>
				<button>3</button>
				<span>...</span>
				<button>10</button>
				<button className='side'>Następna</button>
			</div>
		</StyledPagination>
	)
}

export default Pagination
