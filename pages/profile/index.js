import Head from 'next/head'
import useAuth from '../../contexts/auth';
import Link from "next/link"

export default function Profile() {
    const { user, loading, isAuthenticated, requestOauthAuthorization, accessToken } = useAuth();
    if (!isAuthenticated && !loading){
        requestOauthAuthorization()
        return (<div className="display-3 text-center"><b>Redirecting to authorization screen...</b></div>);
    }
    
    return (<>
        <Head>
            <meta name="title" content="My developer profile" />
            <title>My Ads profile</title>
        </Head>
        {(loading) && <div className="display-3 text-center"><b>Loading...</b></div>}
        {(!loading && isAuthenticated) && <>
            <div className="display-1 text-center">My Ads profile</div>
            <div className="row mt-5">
                <div className="col-lg ml-lg-5 text-left">
                    <h2>This is your Florgon Ads profile, here you can manage your <i>Ads</i> and <i>Integrations</i>.</h2>
                    <Link href="https://dev.florgon.space/apis/ad"><a className="btn btn-outline-primary shadow mt-2">Ads Documentation</a></Link>&nbsp;
                    <Link href="/"><a className="btn btn-primary shadow mt-2 disabled">Publish new ad</a></Link>&nbsp;
                    <Link href="/"><a className="btn btn-primary shadow mt-2 disabled">Add new integration</a></Link>
                </div>
                <div className="col-lg ml-lg-5 text-left mt-1">
                    <h2>Logged in as <b>{user.username}</b>.</h2>
                    <Link href="https://profile.florgon.space"><a className="btn btn-outline-primary shadow mt-2">Florgon Profile</a></Link>&nbsp;
                    <Link href="/profile/logout"><a className="btn btn-outline-secondary shadow mt-2">Logout</a></Link>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-lg ml-lg-5 text-right mb-3">
                    <h2>Have any questions?</h2>
                    <p>Contact support and ask any question that you want.</p>
                    <Link href={`mailto: ${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}><a className="btn btn-outline-secondary shadow">{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</a></Link>
                </div>
            </div>
        </>}
    </>)
}