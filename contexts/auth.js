import React, { createContext, useState, useContext, useEffect } from 'react'
import { useCookies } from 'react-cookie';

import { 
    authMethodUserGetInfo, authApiRedirectOAuthAuthorization,
} from '@kirillzhosul/florgon-auth-api';


const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_NAME);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        function loadAccessTokenFromCookies() {
            const accessToken = cookies[process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_NAME]
            if (accessToken) {
                authMethodUserGetInfo(accessToken).then((response) => {
                    setUser(response["success"]["user"]);
                    setAccessToken(accessToken);
                    setLoading(false);
                }).catch(() => setLoading(false));
                return;
            }
            setLoading(false);
        }
        loadAccessTokenFromCookies();
    }, [])

    const requestOauthAuthorization = () => {
        if (typeof window === "undefined") return;
        const clientId = process.env.NEXT_PUBLIC_FLORGON_OAUTH_CLIENT_ID;
        const redirectUri = `${process.env.NEXT_PUBLIC_FLORGON_OAUTH_REDIRECT_URI_DOMAIN}/oauth/callback`
        authApiRedirectOAuthAuthorization(clientId, redirectUri, "token", "ads", "");
    }

    const loginUserWithAcessToken = (accessToken) => {
        setCookie(process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_NAME, accessToken, {
            "domain": process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_DOMAIN,
            "maxAge": parseInt(process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_MAX_AGE),
            "path": "/"
        });
    }

    const logoutUserAccessToken = () => {
        removeCookie(process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_NAME, {
            "domain": process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_DOMAIN,
            "path": "/"
        });
        setUser(null);
        window.location.pathname = "/";
    }

    const authContext = { 
        isAuthenticated: !!user, 
        loading, 

        user, accessToken,

        requestOauthAuthorization, 
        loginUserWithAcessToken,
        logoutUserAccessToken
    }

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}


export default function useAuth(){
    return useContext(AuthContext);
}

export {
    AuthProvider
}