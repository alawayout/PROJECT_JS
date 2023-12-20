function Button(props) {

    let {paragraph, color} = props

    return (
        <button style={{backgroundColor: color}}>
            {paragraph}
        </button>
    )
}

export default Button