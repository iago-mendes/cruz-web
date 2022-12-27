import {memo} from 'react'
import {FiInfo, FiMinus, FiPlus} from 'react-icons/fi'
import Image from 'next/legacy/image'

import {Card} from './styles'
import {ProductListedPriced} from '../../models/product'
import {RequestProduct} from '../../models/request'
import formatPrice from '../../utils/formatPrice'

type Props = {
	product: ProductListedPriced
	selectedProduct: RequestProduct | undefined

	openProductModal: (selected: ProductListedPriced) => void
	handleChangeProductQuantity: (
		product: ProductListedPriced,
		quantity: number
	) => void
}

function RequestProductCardComponent({
	product,
	selectedProduct,
	openProductModal,
	handleChangeProductQuantity
}: Props) {
	const removeQuantity = selectedProduct ? selectedProduct.quantidade - 1 : 0
	const addQuantity = selectedProduct ? selectedProduct.quantidade + 1 : 1

	return (
		<Card isSelected={selectedProduct !== undefined} type="product">
			<button className="info" onClick={() => openProductModal(product)}>
				<FiInfo size={25} />
			</button>
			<figure>
				<Image
					src={product.imagem}
					alt={'Image of ' + product.nome}
					layout="fill"
				/>
			</figure>
			<h3>{product.nome}</h3>
			<span>{formatPrice(product.preco)}</span>
			<div className="field">
				<button
					onClick={() => handleChangeProductQuantity(product, removeQuantity)}
				>
					<FiMinus size={25} />
				</button>
				<input
					id="quantidade"
					name="quantidade"
					type="number"
					value={selectedProduct ? selectedProduct.quantidade : 0}
					onChange={e =>
						handleChangeProductQuantity(product, Number(e.target.value))
					}
				/>
				<button
					onClick={() => handleChangeProductQuantity(product, addQuantity)}
				>
					<FiPlus size={25} />
				</button>
			</div>
		</Card>
	)
}

export const RequestProductCard = memo(
	RequestProductCardComponent,
	(prev, next) => {
		const areSimplePropsEqual =
			prev.product === next.product &&
			prev.openProductModal === next.openProductModal &&
			prev.handleChangeProductQuantity === next.handleChangeProductQuantity

		if (!areSimplePropsEqual) return false

		if (prev.selectedProduct && !next.selectedProduct) return false

		const isProductSelected = next.selectedProduct
			? next.selectedProduct.id === next.product.id
			: false

		return !isProductSelected
	}
)
