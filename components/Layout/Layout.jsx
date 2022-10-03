import Footer from "../Footer/Footer";
import FooterT from "../FooterT/FooterT";
import NavbarHeader from "../Navbar/Navbar";
import NavbarT from "../NavbarT/NavbarT";

export default function Layout({ children }) {
    return (
        <div>
            <NavbarT />
            {children}
            <FooterT />
        </div>
    )
}
