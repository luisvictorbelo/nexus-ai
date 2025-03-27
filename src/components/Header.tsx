import Nav from "./Nav";
import CallToAction from "./CallToAction";

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Nav />
            <CallToAction />
        </header>
    )
}