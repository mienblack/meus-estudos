import Image from 'next/image'
import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name='keywords' content='Roupas,Calças,Camisetas' />
        <meta name="description" content="Encontre as melhores roupas para você" />
      </Head>
      <h1>Hello World NextJS</h1>
      <Image src='/images/rio.png' alt='Rio perto de momntanhas' width={200} height={200} />
    </>
  )
}
