import Link from 'next/link'

function Navbar() {
    return (
        <nav className='header'>
            <h1 className='logo'>
                <Link href='/home'>
                    <a>405</a>
                </Link>
            </h1>
            <ul className='main-nav loaded'>
                <li>
                    <Link href='/home'>
                        <a>Inicio</a>
                    </Link>
                </li>
                <li>
                    <Link href='/clientes'>
                        <a>Clientes</a>
                    </Link>
                </li>
                <li>
                    <Link href='/corridas'>
                        <a>Corridas</a>
                    </Link>
                </li>
                <li>
                    <Link href='/profile'>
                        <a>Perfil</a>
                    </Link>
                </li>
                <li>
                    <Link href='/protected'>
                        <a>Protegido</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

// {!loading && !session && (
//     <li>
//         <Link href='/api/auth/signin'>
//             <a onClick={ e => {
//                 e.preventDefault()
//                 signIn('github')
//             }}>Sign in</a>
//         </Link>
//     </li>
// )}
// {session && (
//     <li>
//         <Link href='/api/auth/signout'>
//             <a onClick={ e => {
//                 e.preventDefault()
//                 signOut()
//             }}>Sign out</a>
//         </Link>
//     </li>
// )}