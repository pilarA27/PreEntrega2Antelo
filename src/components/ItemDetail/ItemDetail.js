import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    return (
        <article>
            <div className="CardDivDetail">
            <article className='CardDetail'>
            <picture>
                <img src={img} alt={name} className="CardImgDetail"/>
            </picture>
            <header className="CardHeaderDetail">
                <h2 className="CardHeaderItemDetail">
                    {name}
                </h2>
            </header>
            <section>
                <p className="CardInfoDetail">
                    {description}
                </p>
                <p className="CardInfoDetail">
                    Precio: ${price}
                </p>
                <p className="CardInfoDetail">
                    Available Stock: {stock}
                </p>
            </section>
            <footer className="CardFooterDetail">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Added amount ', quantity)}/>
            </footer>
        </article>
        </div>
        </article>
    )
}

export default ItemDetail