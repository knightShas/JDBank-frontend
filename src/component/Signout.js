import { Navigate } from 'react-router-dom';
export default function Signout(){
    sessionStorage.clear();
    localStorage.clear();
    return(
        <Navigate to="/" />
    );
}