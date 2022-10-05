import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NavbarUSWDS from "../NavbarUSWDS/NavbarUSWDS";


export default function Layout({ children }) {
    return (
        <div>
            <NavbarUSWDS />
            {children}
            <Footer />
        </div>
    )
}
