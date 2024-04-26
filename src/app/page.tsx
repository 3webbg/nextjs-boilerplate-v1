import Main from '@/components/layout/main'
import { site_name } from '@/config/constants'

export default function Home() {
  return (
    <Main>
      <header data-role="hero" className="container pt-10">
        <h1 className="display-main mb-3 font-montserrat">{site_name}</h1>
        <p className="headline-h5 font-medium">
          Generated with create next app
        </p>
      </header>
    </Main>
  )
}
