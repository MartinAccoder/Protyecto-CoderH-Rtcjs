const DivChildren = (props) => {

    const styles = {
        display: "flex",
        flexDirection: props.direction,
        justifyContent: props.justify,
        alignItems: props.align,
        gap: props.gap,
        padding: props.padding,
        color: props.color,
    };

    return (
        <div style={styles}>
            <h1>Children!!</h1>
            {props.children}
        </div>
    );
}

export default DivChildren;
