import CategoryCard from '../CategoryCard/CategoryCard'
import { useEffect, useState } from "react";
import style from './CategoryList.module.css'



function CategoryList() {


    
    const [category, setCategory] = useState([])


    useEffect(() => {
        fetch('http://localhost:3333/categories/all')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    const data = [];
    category.map(e => data.push(e.image))




    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Categories</h2>
            <div className={style.block}>
                <a className={style.text} href='you'>
                    <CategoryCard src={data[0]} text='Fertilizer'/>
                </a>
                <a className={style.text} href='you'>
                    <CategoryCard src={data[1]} text='Protective products and septic tanks'/>
                </a>
                <a className={style.text} href='you'>
                    <CategoryCard src={data[2]} text='Planting material'/>
                </a>
                <a className={style.text} href='you'>
                    <CategoryCard src={data[3]} text='Tools and equipment'/>
                </a>
            </div>
        </div>
    )
}

export default CategoryList