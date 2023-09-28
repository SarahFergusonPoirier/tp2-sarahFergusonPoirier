import { useState } from 'react'

const AddProduct = ({onAdd}) => {
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const [categorie, setCategorie] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!nom) {
            alert('Please add a product')
            return
        }
        onAdd({nom, description, prix, categorie})
        setNom('')
        setDescription('')
        setPrix('')
        setCategorie('')
    }
    
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Produit</label>
                <input type="text" placeholder="Ajouter un produit" value={nom} onChange = {(e) => setNom(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="Ajouter une description" value={description} onChange = {(e) => setDescription(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Prix</label>
                <input type="text" placeholder="Ajouter un prix" value={prix} onChange = {(e) => setPrix(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Catégorie</label>
                <input type="text" placeholder="Ajouter une catégorie" value={categorie} onChange = {(e) => setCategorie(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-block" value="Save product" />
        </form>
    )
}

export default AddProduct