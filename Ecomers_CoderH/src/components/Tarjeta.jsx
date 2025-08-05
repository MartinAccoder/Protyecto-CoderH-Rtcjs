const Tarjeta = (props) => {
    const styles = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: props.backgroundColor ,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        margin: "10px",
        width: "300px",
        textAlign: "center", 
    };

    return (
        <div style={styles}>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
            {props.children}
        </div>
    );
}
export default Tarjeta;
