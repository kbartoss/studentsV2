import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md, maxHeight1, maxHeight2, openSidebarWrap } = MEDIA_QUERIES

const StyledTable = styled.table<{ isOpen: boolean }>`
	width: 100%;
	border-spacing: 0 12px;

	thead {
		font-size: 24px;
		text-align: left;

		tr {
			th {
				padding: 10px 24px;
				white-space: nowrap;
			}
		}
	}

	tbody {
		tr {
			background: ${({ theme }) => theme.color.tableRowBg};
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
			background: ${({ theme }) => theme.color.secondaryColor};
		}
	}

	${openSidebarWrap} {
		thead {
			font-size: ${({ isOpen }) => (isOpen ? '20px' : '')};

			tr {
				th {
					padding: ${({ isOpen }) => (isOpen ? '5px 12px' : '')};
				}
			}
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
					padding: 5px 12px;
				}
			}
		}

		tbody {
			white-space: nowrap;

			tr {
				td {
					padding: 6px 16px;
				}
			}
		}
	}
`

const TableContainer = styled.div<{ isOpen: boolean }>`
	margin-top: 38px;
	max-height: calc(70vh - 90px);
	overflow-y: auto;

	${openSidebarWrap} {
		margin-top: ${({ isOpen }) => (isOpen ? '12px' : '')};
		max-height: ${({ isOpen }) => (isOpen ? 'calc(70vh - 100px)' : '')};
	}

	${md} {
		margin-top: 12px;
		max-height: calc(70vh - 150px);

		${maxHeight2} {
			max-height: calc(70vh - 90px);
		}

		${maxHeight1} {
			max-height: calc(70vh - 150px);
		}
	}
`

export { StyledTable, TableContainer }
