import Footer from "../Footer/Footer";
import NavbarHeader from "../Navbar/Navbar";

export default function Layout({ children }) {
    return (
        <div>
            <NavbarHeader />
            {children}
            <Footer />
        </div>
    )
}
