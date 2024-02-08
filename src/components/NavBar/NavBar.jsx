import "./NavBar.modules.css";
import CardWidget from "../CardWidget/CardWidget";
import { Link, useLocation } from "react-router-dom";

export default function NavBar({img}) {
const location = useLocation();

  return (
    <nav className="NavBarContainer">
      <div className="NavBarTitle">
        <Link to={'/'}><img
          /* style={{ width: "15%" }} */
          src={import.meta.env.BASE_URL + img}
          alt="Logo de la marca thempo"
        /> 
        <h1>thempo</h1>
        </Link>
      </div>
      <div className="NavBarButtonsContainer">
            <div className="NavBarButtons">
            <Link to={'/category/clasic'}  className={`baseButton ${location.pathname === '/category/clasic' ? 'active' : ''}`} >Classic</Link>
            <Link to={'/category/color'} className={`baseButton ${location.pathname === '/category/color' ? 'active' : ''}`} >Color</Link>
            <Link to={'/'} className={`baseButton ${location.pathname === '/'? 'active' : ''}`} >Todos</Link>
            </div>
            <CardWidget img={import.meta.env.BASE_URL + './iconos/shopIcono.png'} />
        </div>
    </nav>
  );
}
