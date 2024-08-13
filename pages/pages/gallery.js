// pages/gallery.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Gallery() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Xolos Ramirez - Galería</title>
                <meta name="description" content="Galería de Xolos Ramirez" />
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
                <h2>Galería</h2>
                <div className={styles.gallery}>
                    <img src="/images/imagen1.jpg" alt="Xoloitzcuintli 1" />
                    <img src="/images/imagen2.jpg" alt="Xoloitzcuintli 2" />
                    <img src="/images/imagen3.jpg" alt="Xoloitzcuintli 3" />
                </div>
            </main>
        </div>
    );
}
