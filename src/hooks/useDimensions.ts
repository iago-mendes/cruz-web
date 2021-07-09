import {useEffect, useState} from 'react'

export default function useDimensions() {
	const [width, setWidth] = useState(600)
	const [height, setHeight] = useState(800)
	const inMobile = width < 850
	const inDesktop = width >= 850

	useEffect(() => {
		updateDimensions()
		window.addEventListener('resize', updateDimensions)

		return () => window.removeEventListener('resize', updateDimensions)
	}, [])

	function updateDimensions() {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}

	return {width, height, inMobile, inDesktop}
}
