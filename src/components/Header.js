import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text={showAdd ? 'Fermer' : 'Ajouter'} color={showAdd ? 'red' : 'green'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'e-commerce'
}

export default Header 


