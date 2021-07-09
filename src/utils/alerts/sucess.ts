import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function sucessAlert(display: string) {
	MySwal.fire({
		title: display,
		icon: 'success',
		timer: 1750,
		showConfirmButton: false
	})
}

export default sucessAlert
