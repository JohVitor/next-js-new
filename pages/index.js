import Link from 'next/link';


function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/contact">
                <a>Contato</a>
            </Link>
            
        </div>
    ) 
}

export default Home