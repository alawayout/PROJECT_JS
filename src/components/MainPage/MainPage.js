import CategoryList from "../CategoryList/CategoryList"
import Header from "../Header/Header"
import MainWelc from "../MainWelc/MainWelc"

function MainPage() {
    return (
        <div>
            <Header/>
            <MainWelc/>
            <CategoryList/>
        </div>
    )
}

export default MainPage