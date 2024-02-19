function MyComponent(props) {
    return (
        <>
            <h1>{props.name} title</h1> {/* Using general props */}
            {props.children}

            {1 + 2 + 3 * 5} {/* JS code inside the component */}
        </>
    )
}

export default MyComponent;