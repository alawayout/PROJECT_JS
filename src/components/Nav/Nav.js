import style from "./Nav.module.css"


function Nav() {
    return (
        <div className={style.header}>
            <a href="you">
                <img className={style.imageOne} src="image/logo.svg" alt=""/>
            </a>
            <div className={style.links}>
                <a className={style.link} href="you">Main Page</a>
                <a className={style.link} href="you">Categories</a>
                <a className={style.link} href="you">All Products</a>
                <a className={style.link} href="you">All Sales</a>
            </div>
            <a href="you">
                <img className={style.imageTwo} src="image/basket.svg" alt=""/>
            </a>
        </div>
    )
}

export default Nav