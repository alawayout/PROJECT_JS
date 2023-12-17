function CategoryCard(props) {


    let {src, text} = props

    return (
        <div>
            <img src={src} alt=""/>
            <p>{text}</p>
        </div>
    )
}

export default CategoryCard