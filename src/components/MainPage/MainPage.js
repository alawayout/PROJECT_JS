import CategoryList from "../CategoryList/CategoryList"
import DiscountForm from "../DiscountForm/DiscountForm"
import Header from "../Header/Header"
import MainWelc from "../MainWelc/MainWelc"
import Footer from "../Footer/Footer"


function MainPage() {
    return (
        <div>
            <Header/>
            <MainWelc img='https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg'/>
            <CategoryList/>
            <DiscountForm/>
            <Footer/>
        </div>
    )
}

export default MainPage