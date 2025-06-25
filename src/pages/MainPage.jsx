
import Navbar from "../components/header/Navbar"
import Hero from '../components/hero/Hero'
import Advert from '../components/advert/Advert'
import Arrivals from '../components/new arrivals/Arrivals'
import ShopByCategory from '../components/shopbycategory/ShopByCategory'
import ShopByRoom from '../components/shopbyroom/ShopByRoom'
import CaptionSection from '../components/caption/Caption'
import Socials from '../components/socials/Socials'
import Footer from '../components/footer/Footer'

const MainPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Advert />
            <Arrivals />
            <ShopByCategory />
            <CaptionSection />
            <ShopByRoom />
            <Socials />
            <Footer />
        </>
    )
}

export default MainPage