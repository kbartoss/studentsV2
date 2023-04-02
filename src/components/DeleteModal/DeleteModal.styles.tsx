import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledDeleteModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	padding: 24px 32px;
	transform: translate(-50%, -50%);
	width: 548px;
	height: 290px;
	border-radius: 24px;
	background-color: ${({ theme }) => theme.color.secondaryColor};
	z-index: 11;

	p {
		color: ${({ theme }) => theme.color.blackColor};
	}

	${md} {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 0;
		padding: 68px 24px;
		overflow: hidden;
	}
`

const DeleteModalQuestion = styled.p`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 12px;

	${md} {
		margin-bottom: 24px;
	}
`

const DeleteModalInfo = styled.p`
	font-size: 18px;
`

const DeleteModalStudentInfo = styled.p`
	margin-top: 25px;
	font-weight: 500;
	font-size: 24px;

	${md} {
		margin-top: 58px;
	}
`

const DeleteModalBtns = styled.div`
	margin-top: 48px;
	display: flex;
	justify-content: space-around;

	button {
		border-radius: 12px;
		padding: 18px 85px;
		font-weight: 600;
		font-size: 18px;
		cursor: pointer;
		transition: background-color 0.3s, color 0.3s;
	}

	${md} {
		flex-direction: column;
		justify-content: flex-end;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		margin-bottom: 64px;
	}
`

const CancelBtn = styled.button`
	background-color: ${({ theme }) => theme.color.secondaryColor};
	border: 2px solid ${({ theme }) => theme.color.primaryColor};
	border-radius: 12px;

	&:hover {
		background: ${({ theme }) => theme.color.cancelButtonHover};
		border: 2px solid ${({ theme }) => theme.color.primaryColor};
	}

	${md} {
		margin-bottom: 16px;
	}
`

const DeleteBtn = styled.button`
	color: ${({ theme }) => theme.color.whiteColor};
	background-color: ${({ theme }) => theme.color.deleteButton};
	border: none;

	&:hover {
		background: ${({ theme }) => theme.color.deleteButtonHover};
	}
`

export {
	StyledDeleteModal,
	DeleteModalBtns,
	CancelBtn,
	DeleteBtn,
	DeleteModalQuestion,
	DeleteModalInfo,
	DeleteModalStudentInfo,
}
