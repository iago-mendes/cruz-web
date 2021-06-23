function formatPrice(price: number | undefined)
{
	if (!price)
		return 'R$ 0,00'

	const formatedPrice = 'R$ ' + price.toFixed(2).replace('.', ',')
	return formatedPrice
}

export default formatPrice