import LogoDesktop from "./LogoDesktop";
import IconesDesktop from "./IconesDesktop";
import LogoMobile from "./LogoMobile";
import IconesMobile from "./IconesMobile";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <LogoDesktop />
        <LogoMobile />

        <div class="instagram-mobile">
          <img src="assets/img/logo.png" />
        </div>

        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <IconesDesktop />
        <IconesMobile />
      </div>
    </div>
  );
}
