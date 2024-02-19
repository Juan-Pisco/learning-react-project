function ConditionalExpert({ count }) {
    return <div>
        <h1>Hello</h1>
        {count === 3 ? <h2> there </h2> : <h2>noup</h2>}
        <h3>...</h3>
    </div>
}

export default ConditionalExpert;