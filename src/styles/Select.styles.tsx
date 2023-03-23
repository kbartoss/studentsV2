import styled from 'styled-components'

const StyledSelect = styled.div`
	position: relative;
    display: flex;
    align-items: center;
	padding: 14px 18px;
	width: 80%;
	height: 60px;
	font-size: 18px;
	font-weight: 400;
	margin-bottom: 32px;
	color: ${({ theme }) => theme.color.blackColor};
	background: ${({ theme }) => theme.color.whiteColor};
	border: 1px solid #818181;
	border-radius: 12px;
	cursor: pointer;


	.options {
        margin-top: 2px;
        overflow: hidden;
		background-color: white;
		border: 1px solid #ccc;
		border-radius: 12px;
		left: 0;
		position: absolute;
		top: 100%;
		width: 100%;

        .option
        {
            cursor: pointer;
            padding: 4px 18px;

            &:hover 
            {
                color: ${({ theme }) => theme.color.whiteColor};
                background-color: ${({ theme }) => theme.color.primaryColor};
            }
        }
	}
`

export { StyledSelect }
