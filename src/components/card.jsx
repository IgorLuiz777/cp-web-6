
import './card.scss'

export const Card = ({ title, desc, img, price, type, cat }) => {
    return (
      <div className="card">
        <img src={img} />
        <p>{title}</p>
        <p>Por: R$ {price}</p>
        <p>{desc}</p>
        <p>Categoria: {type}</p>
        <p>{cat}</p>
        <button>Comprar</button>
      </div>
    );
  };