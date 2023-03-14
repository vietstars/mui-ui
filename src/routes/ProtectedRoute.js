import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import { useAuth } from "contexts/Auth"

export const ProtectedRoute = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  if (!user || !user.token || user.token === "") {
    Swal.fire({
      title: 'You must be signed in!',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'SignIn',
      denyButtonText: 'Signup',
    }).then((result) => {
      if (result.isConfirmed) {
        return navigate('/sign-in')
      } else if (result.isDenied) {
        return navigate('/sign-up')
      } else {
        return navigate('/404');
      }
    })
  }

  return null;
}
