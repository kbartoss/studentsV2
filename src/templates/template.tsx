import styled from 'styled-components'

const Container = styled.div`
	background-color: #f5f5f5;
	border-radius: 4px;
	padding: 16px;
`

const Text = styled.p`
	color: #333;
	font-size: 16px;
`

const MyComponent = (props: any) => {
	return (
		<Container>
			<Text> {props.children}</Text>
		</Container>
	)
}

export default MyComponent
