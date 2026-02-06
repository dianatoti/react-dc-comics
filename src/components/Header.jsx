import Logo from "./Logo";
import Navbar from "./Navbar";


export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
      <Logo />
      <Navbar />
      </div>
    </header>
  )
}