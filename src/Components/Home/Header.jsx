import Logo from "./../Home/Logo";
import Nav from "./../Home/NavLinks";

function Header({ className }) {
  return (
    <nav
      className={`flex items-center justify-between text-lg font-semibold uppercase ${className}`}>
      <Logo />
      <Nav />
    </nav>
  );
}

export default Header;
