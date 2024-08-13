// pages/blog.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Blog({ posts }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Xolos Ramirez - Blog</title>
                <meta name="description" content="Blog de Xolos Ramirez" />
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
                <h2>Blog</h2>
                <div>
                    {posts.map(post => (
                        <div key={post.id} className={styles.blogArticle}>
                            <h3>
                                <Link href={`/post/${post.id}`}>
                                    <a>{post.title}</a>
                                </Link>
                            </h3>
                            <p>{post.excerpt}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const posts = [
        { id: '1', title: 'Título del Artículo 1', excerpt: 'Resumen del artículo 1.' },
        { id: '2', title: 'Título del Artículo 2', excerpt: 'Resumen del artículo 2.' }
    ];
    return { props: { posts } };
}
