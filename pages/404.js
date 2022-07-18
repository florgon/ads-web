import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
  return (<>
    <Head>
      <meta name="title" content="Not Found" />
      <title>Not Found | 404</title>
    </Head>
    <div className="display-1 text-danger text-center"><b>404</b></div>
    <div className="row mt-5 mb-5">
        <div className="col-lg ml-lg-5 text-center">
          <h2></h2>
          <h2><b>Oops...</b></h2>
          <p>Page or resource you are looking for <b>not exists</b> or <b>unavaliable</b> at this moment!</p>
          <Link href="/"><a className="btn btn-lg btn-primary mt-3 shadow">Go back to Home</a></Link>
        </div>
    </div>
  </>)
}