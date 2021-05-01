import Layout from '../components/layout'
import useSWR from 'swr'
import Link from 'next/link'


export default function Home() {

  const func = (...args)=> fetch(...args).then(res => res.text())
  const { data, err } = useSWR('/data.txt', func)

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
      <div className="alert alert-primary text-center">
        <h5 className="mb-4">{ data }</h5>
      </div>
      <Link href="./other">
        <button className="btn btn-primary">
          &lt;&lt; Go to other page
        </button>
      </Link>
      </Layout>
    </div>
  )
}
