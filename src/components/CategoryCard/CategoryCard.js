import style from './CategoryCard.module.css'


function CategoryCard(props) {


    let {src, text} = props

    return (
        <div className={style.wrapper}>
            <img className={style.image} src={'http://localhost:3333' + src} alt=""/>
            <p className={style.text}>{text}</p>
        </div>
    )
}

export default CategoryCard