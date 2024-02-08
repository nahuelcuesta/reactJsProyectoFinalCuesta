import './item.modules.css'
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, category, img, stock }) => {

  return (
    <div className="itemContainer">
      <img src={import.meta.env.BASE_URL + img} alt={name} />
      <h1>{name}</h1>
      <p>Categoria: {category}</p>
      <p className='precio'>$ {price}</p>
      <Link to={`/detail/${id}`}>Ver Detalle</Link>
    </div>
  );
};
export default Item;
