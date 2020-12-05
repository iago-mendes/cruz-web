import Container from '../styles/components/Loading'

const Loading: React.FC = () =>
{
	return (
		<Container>
			<svg>
				<circle
					cx='25'
					cy='25'
					r='20'
					fill='none'
					strokeWidth='4'
				/>
			</svg>
		</Container>
	)
}

export default Loading