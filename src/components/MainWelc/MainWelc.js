import Button from "../Button/Button"



function MainWelc(props) {


    let {img} = props

    return (
        <div style={{backgroundImage:'url(' + img + ')'}}>
            <h1>Amazing Discounts on Garden Products!</h1>
            <Button paragraph="Check out" color="green"/>
        </div>
    )
}

export default MainWelc