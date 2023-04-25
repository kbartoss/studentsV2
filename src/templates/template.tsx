import styled from 'styled-components'

const Container = styled.div`
	background-color: ${({ theme }) => theme.color.whiteColor};
	border-radius: 4px;
	padding: 16px;
`

const Text = styled.p`
	color: ${({ theme }) => theme.color.blackColor};
	font-size: 16px;
`

type MyComponentProps = React.PropsWithChildren<{}>

const MyComponent = (props: MyComponentProps) => {
	return (
		<Container>
			<Text> {props.children}</Text>
		</Container>
	)
}

export default MyComponent
