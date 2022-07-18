import { useCallback, useEffect, useState } from 'react';
import useAuth from '../../contexts/auth';
import { authMethodUserGetInfo } from '@kirillzhosul/florgon-auth-api';

export default function OAuthCallback() {
    const { loginUserWithAcessToken } = useAuth();

    const loginUserFromCallbackData = useCallback(() =>{
        const hash = (typeof window === "undefined") ? "" : (window.location.hash.substring(1))
        const accessToken = new URLSearchParams(hash).get("token");
        if (accessToken){
            authMethodUserGetInfo(accessToken).then(() => {
                loginUserWithAcessToken(accessToken);
                window.location.href = "/profile";
            }).catch(() => {
                window.location.href = "/";
            })
        }else{
            window.location.href = "/";
        }

    }, [loginUserWithAcessToken]);

    useEffect(() => {
        loginUserFromCallbackData();
    }, [loginUserFromCallbackData]);

    return (<div className="display-2 text-center"><b>Loading account information....</b></div>)
}