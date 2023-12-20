import style from './ContactInfo.module.css'


function ContactInfo() {
    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>Contact</h1>
            <div className={style.elems}>
                <div className={style.elem}>
                    <div className={style.block}>
                        <p className={style.text}>Phone</p>
                        <h3 className={style.head}>+7 (499) 350-66-04</h3>
                    </div>
                    <div className={style.block}>
                        <p className={style.text}>Address</p>
                        <h3 className={style.head}>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h3>
                    </div>
                </div>
                <div className={style.elem}>
                    <div className={style.block}>
                        <p className={style.text}>Socials</p>
                        <div className={style.images}>
                            <img className={style.image} src="image/Vector.svg" alt=""/>
                            <img className={style.image} src="image/Vector (1).svg" alt=""/>
                        </div>
                    </div>
                    <div className={style.block}>
                        <p className={style.text}>Working Hours</p>
                        <h3 className={style.head}>24 hours a day</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo