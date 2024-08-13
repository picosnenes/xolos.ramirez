// pages/post/[postId].js
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Post({ post }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Xolos Ramirez - {post.title}</title>
                <meta name="description" content={post.excerpt} />
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
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </main>
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { postId: '1' } },
            { params: { postId: '2' } }
        ],
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const post = {
        '1': { title: 'Título del Artículo 1', content: 'Contenido completo del artículo 1.' },
        '2': { title: 'Título del Artículo 2', content: 'Contenido completo del artículo 2.' }
    }[params.postId];

    return { props: { post } };
}
