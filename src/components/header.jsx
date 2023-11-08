
import Link from "next/link"
import './global.scss'

export default function Header(){

    return(
        <nav>
            <header>
                <Link href={'/'} >Home</Link>
                <Link href={'/animes'} >Animes</Link>
                <Link href={'/dc'} >Dc Comics</Link>
                <Link href={'/marvel'} >Marvel</Link>
                <Link href={'/contatos'} >Contate-nos</Link>
                <Link href={'/sobre'} >Sobre nós</Link>
            </header>
        </nav>
    )

}