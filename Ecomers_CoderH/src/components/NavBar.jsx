import "../css/NavBar.css"

const NavBar = () => {
  return (
    <nav className="Nav-Container">
    <img alt="logo" src="../public/Imagen1.jpg"/>
        <a href="" className="AnchorBar">Productos</a>
        <a href="" className="AnchorBar">Busqueda</a>
        <a href="" className="AnchorBar">Contactanos</a>
      
    </nav>
  );
} 

export default NavBar;