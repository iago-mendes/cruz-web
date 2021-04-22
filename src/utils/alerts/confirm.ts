import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function confirmAlert(title: string, text: string, callback: () => void, confirmText = 'Continuar', cancelText = 'Cancelar')
{
	MySwal.fire(
		{
			icon: 'question',
			title: title,
			text: text,
			showCancelButton: true,
			confirmButtonText: confirmText,
			cancelButtonText: cancelText
		})
		.then(res =>
		{
			if (res.isConfirmed)
				callback()
		})
}

export default confirmAlert