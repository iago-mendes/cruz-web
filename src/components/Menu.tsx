import Link from 'next/link'

import { FiUser } from 'react-icons/fi'

import styles from '../styles/components/menu.module.css'
import logo from '../assets/logo.svg'

export default function MenuTabs()
{
    return (
        <div id={styles.tabsContainer}>
            <Link href="/">
                <img src={logo} alt="Cruz Representações" />
            </Link>
            <ul>
                <Link href="/">
                    <a className={styles.link}>
                        Empresas
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.link}>
                        Catálogo
                    </a>
                </Link>
                <Link href="/contato">
                    <a className={styles.link}>
                        Contato
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.link}>
                        Sobre
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.linkBlock}>
                        Fazer pedido
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.linkUser}>
                        <FiUser size={30} color="#5e5d5d" />
                    </a>
                </Link>
            </ul>
        </div>
    )
}