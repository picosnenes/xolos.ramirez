// pages/about.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Xolos Ramirez - Sobre Nosotros</title>
                <meta name="description" content="Información sobre Xolos Ramirez" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <h1>Xolos Ramirez</h1>
                <p>Criadero de Xoloitzcuintli</p>
            </header>

            <nav className={styles.nav}>
                <a href="/">Inicio</a>
                <a href="/about">Sobre Nosotros</a>
                <a href="/gallery">Galería</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contacto</a>
            </nav>

            <main className={styles.main}>
                <h2>Sobre Nosotros</h2>
                <p>Somos un criadero especializado en Xoloitzcuintlis, una raza única y ancestral.</p>
            </main>
        </div>
    );
}
