function formatPrice(p: number)
{
	return 'R$ ' + p.toFixed(2).replace('.', ',')
}

export default formatPrice