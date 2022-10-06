import Footer from "../Footer/Footer";
import FooterUSWDS from "../FooterUSWDS/FooterUSWDS";
import Navbar from "../Navbar/Navbar";
import NavbarUSWDS from "../NavbarUSWDS/NavbarUSWDS";


export default function Layout({ children }) {
    return (
        <div>
            <NavbarUSWDS />
            {children}
            <FooterUSWDS />
        </div>
    )
}
