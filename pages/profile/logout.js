
import useAuth from '../../contexts/auth';
import { useEffect } from 'react';

export default function Logout() {
    const { logoutUserAccessToken } = useAuth();

    useEffect(() => {
        logoutUserAccessToken();
    }, [logoutUserAccessToken]);

    return (<div className="display-3 text-center"><b>Logging you out...</b></div>)
}