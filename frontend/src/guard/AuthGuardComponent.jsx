import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuardComponent = ({ children }) => {
    const userStore = useSelector((store) => store.userSlicer);
    return !userStore ? children : <Navigate to={"/"} />
}

export default AuthGuardComponent;