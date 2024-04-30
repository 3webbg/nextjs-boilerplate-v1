import Main from '@/components/layout/main'
import { site_name } from '@/config/constants'
import Link from 'next/link'

export default function Home() {
  return (
    <Main>
      <header data-role="hero" className="container pt-10 flex flex-col">
        <h1 className="display-main mb-3 font-montserrat">{site_name}</h1>
        <p className="headline-h5 font-medium">
          Generated with create next app
        </p>
        <Link
          href={'/segment'}
          className="text-red-600 !mt-6 border px-2 py-1 hover:bg-gray-100 bg-white cursor-pointer w-fit rounded-md"
        >
          Check nested layouts! {'>>>'}
        </Link>
      </header>
    </Main>
  )
}
