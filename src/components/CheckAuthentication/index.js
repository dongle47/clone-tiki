import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate ,useLocation} from 'react-router-dom'
import { logoutSuccess } from '../../slices/authSlice'
import {toast} from 'react-toastify'
import jwt_decode from 'jwt-decode'

const publicPath = [
    '/product/', '/filter/', '/payment/'
]

function CheckAuthentication() {
    const user = useSelector(state => state.auth.user)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        const check = () => {
            if (user) {
                if (user.accessToken && user.refreshToken) {
                    const tokenDecode = jwt_decode(user.refreshToken)
                    let date = new Date();
                    if (tokenDecode.exp < date.getTime() / 1000) {
                        toast.warning("Phiên làm việc của bạn đã hết. Vui lòng đăng nhập lại")
                        dispatch(logoutSuccess())
                        const isPublic = publicPath.findIndex(e => location.pathname.includes(e)) >= 0 ? true : false
                        if (!isPublic)
                            navigate('/')
                       
                    }
                }
                else{
                    dispatch(logoutSuccess())
                    toast.warning("Phiên làm việc của bạn đã hết. Vui lòng đăng nhập lại")
                        const isPublic = publicPath.findIndex(e => location.pathname.includes(e)) >= 0 ? true : false
                        if (!isPublic)
                            navigate('/')
                }
            }
        }
        check()
    }, [user])
    return
}

export default CheckAuthentication