import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/products">Liste des produits</Link>
        </nav>
    )
}

export default Nav

