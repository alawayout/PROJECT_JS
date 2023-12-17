function Button(props) {

    let {paragraph, color} = props

    return (
        
        <button backgroundColor={color}>
            {paragraph}
        </button>
    )
}

export default Button