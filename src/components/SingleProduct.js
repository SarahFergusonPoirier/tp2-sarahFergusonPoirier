import { FaTimes, FaEdit } from 'react-icons/fa'
import { useState } from 'react'

const SingleProduct = ({product, onDelete, onUpdate}) => {
    const [id, setId] = useState(product.id)
    const [nom, setNom] = useState(product.nom)
    const [description, setDescription] = useState(product.description)
    const [prix, setPrix] = useState(product.prix)
    const [categorie, setCategorie] = useState(product.categorie)


    const onSubmit = (e) => {
        e.preventDefault()
        onUpdate({id, nom, description, prix, categorie})
    }

    return(
        <div className="container">
            <h3>{product.nom}
                <FaTimes
                style= {{ color: 'red' }}
                onClick = { () => onDelete(product.id) }
                />
            </h3>
            <p><span>Description: </span>{product.description}</p>
            <p><span>Prix: </span>{product.prix} $</p>
            <p><span>Catégorie: </span>{product.categorie}</p>
            
            <form className="modify-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Produit</label>
                    <input type="text" placeholder="Ajouter un produit" value={nom} onChange = {(e) => setNom(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label>Description</label>
                    <input type="text" placeholder="Ajouter une description" value={description} onChange = {(e) => setDescription(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label>Prix</label>
                    <input type="text" placeholder="Ajouter un prix" value={prix} onChange = {(e) => setPrix(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label>Catégorie</label>
                    <input type="text" placeholder="Ajouter une catégorie" value={categorie} onChange = {(e) => setCategorie(e.target.value)}/>
                </div>
                <input type="submit" className="btn btn-block" value="Save product" />
            </form>
        </div>
    )
}

export default SingleProduct