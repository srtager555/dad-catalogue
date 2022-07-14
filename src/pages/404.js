import Link from "next/link"
import Head from "next/head"

export default function NotFoundPage() {
    return (
        <>
            <Head>
                <title>404: pagina no encontrada.</title>
            </Head>
            <p>404: pagina no encontrada</p>
            <Link href="/">
                <a>Regresar a la pagina principal</a>
            </Link>
        </>
    )
}