import React from "react";

function ConteudoPost(props) {
  const [hearticon, setHeartIcon] = React.useState("heart-outline");
  const [heart, setHeart] = React.useState("");
  const [centralHeart, setCentralHeart] = React.useState("escondido");

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
        <img
          onClick={() => {
            if (hearticon !== "heart") {
              props.funçãoLike((props.likes * 1000 + 1) / 1000); // aumenta um like ao curtir a publicação
            }
            setHeartIcon("heart");
            setHeart("heart-liked");
            setCentralHeart("heart-central-post");
          }}
          src={props.postImg}
        />
        <ion-icon id={centralHeart} name="heart"></ion-icon>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              onClick={() => {
                if (heart === "heart-liked") {
                  setHeart("heart-disliked");
                  setHeartIcon("heart-outline");
                  setCentralHeart("escondido");
                  props.funçãoLike((props.likes * 1000 - 1) / 1000); // aumenta um like ao curtir a publicação
                } else {
                  setHeartIcon("heart");
                  setHeart("heart-liked");
                  setCentralHeart("heart-central-post");
                  props.funçãoLike((props.likes * 1000 + 1) / 1000); // aumenta um like ao curtir a publicação
                }
              }}
              id={heart}
              name={hearticon}
            ></ion-icon>
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

export default function Posts() {
  const [likesPost1, setLikesPost1] = React.useState(101.523);
  const [likesPost2, setLikesPost2] = React.useState(213.588);
  const [likesPost3, setLikesPost3] = React.useState(99.155);
  const [likesPost4, setLikesPost4] = React.useState(312.157);

  const listaPosts = [
    {
      posterImg: "assets/img/petlove-logo.jpg",
      poster: "petlove",
      postImg: "assets/img/imagem-calopsitas.jpeg",
      likerImg: "assets/img/respondeai.svg",
      liker: "respondeai",
      likes: likesPost1,
      funçãoLike: setLikesPost1,
    },
    {
      posterImg: "assets/img/tennistv-logo.jpg",
      poster: "tennistv",
      postImg: "assets/img/nadal-trophy.jpg",
      likerImg: "assets/img/9gag.svg",
      liker: "9gag",
      likes: likesPost2,
      funçãoLike: setLikesPost2,
    },
    {
      posterImg: "assets/img/beautiful-destinations.jpg",
      poster: "beautiful-destinations",
      postImg: "assets/img/France.jpg",
      likerImg: "assets/img/adorable_animals.svg",
      liker: "adorable_animals",
      likes: likesPost3,
      funçãoLike: setLikesPost3,
    },
    {
      posterImg: "assets/img/meowed.svg",
      poster: "meowed",
      postImg: "assets/img/gato-telefone.svg",
      likerImg: "assets/img/memeriagourmet.svg",
      liker: "memeriagourmet",
      likes: likesPost4,
      funçãoLike: setLikesPost4,
    },
  ];
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
          funçãoLike={post.funçãoLike}
        />
      ))}
    </div>
  );
}
