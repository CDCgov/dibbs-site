import FooterUSWDS from "../FooterUSWDS/FooterUSWDS";
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
