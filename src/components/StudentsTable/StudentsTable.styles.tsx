import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledTable = styled.table`
	width: 100%;
	border-spacing: 0 12px;

	thead {
		font-size: 24px;
		text-align: left;

		tr {
			th {
				padding: 10px 24px;
			}
		}
	}

	tbody {
		tr {
			background: #fefeff;
			border: 1px solid rgba(217, 217, 217, 0.7);
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
			cursor: pointer;
			transition: all 0.3s;
			border-radius: 12px;

			td {
				padding: 10px 24px;
				white-space: nowrap;
			}

			td:first-child {
				border-radius: 12px 0 0 12px;
			}

			td:last-child {
				border-radius: 0 12px 12px 0;
			}
		}

		tr:hover {
			background: #f9fbff;
		}
	}

	${md} {
		margin-top: 0;
		width: 100vw;
		overflow: auto;

		thead {
			font-size: 20px;

			tr {
				th {
				}
			}
		}

		tbody {
			white-space: nowrap;
		}
	}
`

const TableContainer = styled.div`
	margin-top: 38px;
	max-height: 30vw;
	overflow-y: auto;
`

export { StyledTable, TableContainer }
