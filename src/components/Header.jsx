import Logo from "./Logo";
import Navbar from "./Navbar";


export default function Header() {
  return (
    <header className="flex align-items-center justify-content">
      <Logo />
      <Navbar />
    </header>
  )
}