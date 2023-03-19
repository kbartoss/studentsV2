import styled from 'styled-components'

const StyledTable = styled.table`
	margin-top: 38px;
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
		overflow: hidden;

		tr {
			background: #FEFEFF;
			border: 1px solid rgba(217, 217, 217, 0.7);
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
			cursor: pointer;
			transition: all 0.3s;
			border-radius: 12px;

			td {
				padding: 10px 24px;
			}

			td:first-child {
				border-radius: 12px 0 0 12px;
			}

			td:last-child {
				border-radius: 0 12px 12px 0;
			}
		}

		tr:hover {
			background: #e5e5e5;
		}
	}
`

export { StyledTable }
