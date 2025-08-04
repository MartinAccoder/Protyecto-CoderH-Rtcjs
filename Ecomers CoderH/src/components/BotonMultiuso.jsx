const BotonMultiuso = (props) => {

    const styles = {
        color: "black",
        border: "none",
        backgroundColor: props.color,
        padding: props.padding,
        borderRadius: "1rem",
        cursor: "pointer",

    }
        
    return (
        <button style={styles} onClick={props.onClick} >{props.children}</button>
    )
}

export default BotonMultiuso
