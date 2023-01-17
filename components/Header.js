import Head from 'next/head'

export default function Header(){
    return(
        <Head>
            <title>PPDB SMAN 0 Sawahlunto</title>
            <meta name="description" content="PPDB Website" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link href="index.css" rel="stylesheet"></link>
        </Head>
    )
}