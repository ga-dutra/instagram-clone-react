function ConteudoSugestoes({ img, username, doesfollow }) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={img} />
        <div class="texto">
          <div class="nome">{username}</div>
          <div class="razao">{doesfollow}</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Sugestoes() {
  const sugestoes = [
    {
      img: "assets/img/bad.vibes.memes.svg",
      username: "bad.vibes.memes",
      doesfollow: "Segue você",
    },
    {
      img: "assets/img/chibirdart.svg",
      username: "chibirdart",
      doesfollow: "Segue você",
    },
    {
      img: "assets/img/razoesparaacreditar.svg",
      username: "razoesparaacreditar",
      doesfollow: "Novo no Instagram",
    },
    {
      img: "assets/img/adorable_animals.svg",
      username: "adorable_animals",
      doesfollow: "Segue você",
    },
    {
      img: "assets/img/smallcutecats.svg",
      username: "smallcutecats",
      doesfollow: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map((items) => (
        <ConteudoSugestoes
          img={items.img}
          username={items.username}
          doesfollow={items.doesfollow}
        />
      ))}
    </div>
  );
}
