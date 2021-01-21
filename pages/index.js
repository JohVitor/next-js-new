import Link from 'next/link';
import styles from '../styles.module.css';


export default function Home() {
    return (
        <div className = {styles.construction}>
            <h1>SITE EM CONSTRUÇÃO</h1>
            <Link href="/contact">
                <a>Contato</a>
            </Link>
            
        </div>
    ) 
}
