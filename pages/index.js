// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Xolos Ramirez - Inicio</title>
                <meta name="description" content="Inicio del criadero de Xoloitzcuintli" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <h1>Xolos Ramirez</h1>
                <p>Criadero de Xoloitzcuintli</p>
            </header>

            <nav className={styles.nav}>
                <Link href="/">Inicio</Link>
                <Link href="/about">Sobre Nosotros</Link>
                <Link href="/gallery">Galería</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contacto</Link>
            </nav>

            <main className={styles.main}>
                <h2>Inicio</h2>
                <div className={styles.login}>
                    <h3>Iniciar Sesión</h3>
                    <form method="post" action="/api/login">
                        <input type="text" name="username" placeholder="Usuario" required />
                        <input type="password" name="password" placeholder="Contraseña" required />
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                </div>
                <p>Bienvenido a Xolos Ramirez. Aquí puedes encontrar información sobre nosotros y nuestro criadero.</p>
            </main>
        </div>
    );
}
