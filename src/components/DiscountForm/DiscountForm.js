import Button from '../Button/Button'
import style from './DiscountForm.module.css'

function DiscountForm() {



    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>5% off on the first order</h1>
            <div className={style.elem}>
                <img className={style.image} src="image/image.svg" alt=""/>
                <form className={style.form}>
                    <input className={style.input} placeholder="Name"></input>
                    <input className={style.input} placeholder="Pnone number"></input>
                    <input className={style.input} placeholder="Email"></input>
                    <Button paragraph="Get a discount" color="none"/>
            </form>
            </div>
        </div>
    )
}


export default DiscountForm