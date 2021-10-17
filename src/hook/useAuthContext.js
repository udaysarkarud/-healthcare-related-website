import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"

const useAuthContext = () => {
    return useContext(AuthContext)
}

export default useAuthContext;