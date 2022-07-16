function ConteudoPost(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.posterImg} />
          {props.poster}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.postImg} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.likerImg} />
          <div class="texto">
            Curtido por <strong>{props.liker}</strong> e{" "}
            <strong>outras {props.likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

const listaPosts = [
  {
    posterImg: "assets/img/petlove-logo.jpg",
    poster: "petlove",
    postImg: "assets/img/imagem-calopsitas.jpeg",
    likerImg: "assets/img/respondeai.svg",
    liker: "respondeai",
    likes: "101.523",
  },
  {
    posterImg: "assets/img/tennistv-logo.jpg",
    poster: "tennistv",
    postImg: "assets/img/nadal-trophy.jpg",
    likerImg: "assets/img/9gag.svg",
    liker: "9gag",
    likes: "213.58",
  },
  {
    posterImg: "assets/img/beautiful-destinations.jpg",
    poster: "beautiful-destinations",
    postImg: "assets/img/France.jpg",
    likerImg: "assets/img/adorable_animals.svg",
    liker: "adorable_animals",
    likes: "99.159",
  },
];

export default function Posts() {
  return (
    <div class="posts">
      {listaPosts.map((post) => (
        <ConteudoPost
          posterImg={post.posterImg}
          poster={post.poster}
          postImg={post.postImg}
          likerImg={post.likerImg}
          liker={post.liker}
          likes={post.likes}
        />
      ))}
    </div>
  );
}
