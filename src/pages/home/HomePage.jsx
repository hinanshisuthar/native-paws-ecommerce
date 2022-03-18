import './home.css'
import { Navbar } from "../../components/Navbar"
import { TopPanel } from "./TopPanel";
import { HeroBanner } from './HeroBanner';
import { TopCategories } from './TopCategories';
import { SizeCategories } from './SizeCategories';
import { BottomPanel } from './BottomPanel';
import { Footer } from './Footer';

const HomePage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <TopPanel />
            <HeroBanner />
            <TopCategories />
            <SizeCategories />
            <BottomPanel />
            <Footer />
        </div>
    )
}

export {HomePage};