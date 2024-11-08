import Link from "next/link"
import styles from "./header.module.css"

export default function Header(){
    return(
        <Header>
            <nav>
                <ul claassName={styles.lista}> 
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                       <Link href='/sobre'>Sbre</Link>
                    </li>
                </ul>
            </nav>
            </Header>

    )
}