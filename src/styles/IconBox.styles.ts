import styled from 'styled-components'

const StyledIconBox = styled.div`
	display: flex;

	.student-icon {
		width: 24px;
		height: 24px;
		cursor: pointer;
		transition: transform 0.2s;

		&:hover {
			transform: scale(1.2);
		}
	}

	.trash {
		margin-right: 24px;
	}
`

export { StyledIconBox }
