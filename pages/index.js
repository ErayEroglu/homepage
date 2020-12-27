import Head from 'next/head'
import Link from 'next/link'
import SiteConfig from '../site.config'
import Layout from '@comp/layout'
import Html from '@comp/html'
import { CustomGrid, ColContent, ColExtra, ColSidebar } from '@comp/custom-grid'
import ExternalList from '@comp/external-list'
import Header from '@comp/header'
import Container from '@comp/container'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      <section id="section-hero">
        <Container>
          <CustomGrid>
            <ColSidebar>
              <Header />
            </ColSidebar>

            <ColContent>
              <Html>
                {/*<Image
                  src="/i-am.jpg"
                  alt="Picture of the author"
                  width={1433}
                  height={1018}
                  quality={90}
                />*/}
                <img src="/i-am.jpg" alt="Adem ilter" />
                <p>
                  Ben Adem, evli ve iki çocuk babası olarak İstanbul'da
                  yaşıyorum. Şu an Superpeer şirketinde Ürün Tasarımcısı olarak
                  görev alıyorum.
                </p>
                <p>
                  Web tasarım ve yazılım sektöründe yaklaşık 12 senedir
                  çalışıyorum. Bu süreçte edindiğim tecrübe ve bilgi birikimnini{' '}
                  <Link href="/videos">
                    <a>youtube</a>
                  </Link>{' '}
                  kanalımda insanlara aktarmaya çalışıyorum.
                </p>
                <p>
                  Amacım; kaliteli türkçe içeriğin az olduğu türkiye sektöründe
                  globaldeki kaliteli kanallarla aynı seviyede içerikler
                  üretebilmek ve sektördeki eski alışkanlıkları yenilerle
                  değiştirerek daha iyi bir yere taşımasına ön ayak olmak.
                </p>
              </Html>
            </ColContent>

            <ColExtra>
              <ExternalList
                urls={[
                  SiteConfig.social.twitter,
                  SiteConfig.social.youtube,
                  SiteConfig.social.instagram
                ]}
              />
            </ColExtra>
          </CustomGrid>
        </Container>
      </section>
    </Layout>
  )
}

export default HomePage
