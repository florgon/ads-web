import Link from 'next/link'

export default function Home() {
  return (<>
    <div className="display-1 text-center">Ads publishing system.</div>
    <div className="row mt-5">
        <div className="col-lg ml-lg-5 text-center mb-3">
            <h2>About</h2>
            <p><b>Florgon Ads</b> - is ad publishing system. Publish your own ads and gain traffic, integrate ads into your website and earn money.</p>
            <Link href="/profile"><a className="btn btn-outline-secondary shadow">Dashboard</a></Link>&nbsp;
            <Link href="https://dev.florgon.space/ads"><a className="btn btn-outline-secondary shadow">Documentation (API)</a></Link>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-lg ml-lg-5 text-center mb-3">
            <h2>Have any questions?</h2>
            <p>Contact support and ask any question that you want.</p>
            <Link href={`mailto: ${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}><a className="btn btn-outline-secondary shadow">{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</a></Link>
        </div>
    </div>
  </>)
}