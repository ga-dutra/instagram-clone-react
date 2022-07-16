function LogoDesktop() {
  return (
    <div class="logo">
      <ion-icon name="logo-instagram"></ion-icon>
      <div class="separador"></div>
      <img src="assets/img/logo.png" />
    </div>
  );
}
function IconeLogoMobile() {
  return (
    <div class="logo-mobile">
      <ion-icon name="logo-instagram"></ion-icon>
    </div>
  );
}
function LogoMobile() {
  return (
    <div class="instagram-mobile">
      <img src="assets/img/logo.png" />
    </div>
  );
}
function BarraPesquisa() {
  return (
    <div class="pesquisa">
      <input type="text" placeholder="Pesquisar" />
    </div>
  );
}
function IconesMobile() {
  return (
    <div class="icones-mobile">
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
  );
}
function IconesDesktop() {
  return (
    <div class="icones">
      <ion-icon name="paper-plane-outline"></ion-icon>
      <ion-icon name="compass-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  );
}
export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <LogoDesktop />
        <IconeLogoMobile />
        <LogoMobile />
        <BarraPesquisa />
        <IconesDesktop />
        <IconesMobile />
      </div>
    </div>
  );
}
