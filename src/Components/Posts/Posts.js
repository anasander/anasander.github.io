import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post";
import * as images from "../Images/Images";

const Posts = () => {
  const blogPost = [
    {
      sub: "#DigitalArt",
      date: "03/12/2023",
      title: "Over the Krat Wall",
      body: 'Outro dia assiti o desenho "Over the Garden Wall" ("O Segredo Além do Jardim" em português brasileiro) e gostei muito da experiência; dá a sensação de ser um desenho adulto disfarçado de conto infantil. Enquanto a minha febre com "Lies of P" não passa, resolvi aproveitar e misturar as duas coisas. Acho que o resultado final ficou muito bonitinho, e de alguma forma a mistura fucionou tematicamente...? (na verdade eu só queria desenhar o protagonista usando a cartola gigante).',
      img: [images.otkw],
    },
    {
      sub: "#DigitalArt",
      date: "18/11/2023",
      title: "Real Boy, C.",
      body: 'Mais um desenho do jogo "Lies of P", dessa vez do personagem C. (não posso falar mais sobre pois pode ser considerado spoiler!).',
      img: [images.carlo],
    },
    {
      sub: "#DigitalArt",
      date: "17/11/2023",
      title: "P-zinho",
      body: 'O protagoista do jogo "Lies of P" (as pessoas o chamam de "P") num estilo que costumam chamar de "super deformed", eu acho. Após os últimos desenhos mais elaborados/voltados para o realismo, fazer esses desenhos mais caricatos dá um certo alivio, e é muito divertido!',
      img: [images.smolp],
    },
    {
      sub: "#DigitalArt",
      date: "15/11/2023",
      title: "Romeo, a boy from a memory",
      body: 'Um dos desenhos que fiz enquanto ficava na casa da minha mãe cuidando das cachorrinhas dela enquanto ela viajava. Desenhar à noite é um tipo de meditação pra mim. Romeo é um dos personagens do jogo "Lies of P"!',
      img: [images.romeo],
    },
    {
      sub: "#DigitalArt",
      date: "28/10/2023",
      title: "Rise of P",
      body: 'Recentemente terminei "Lies of P", um jogo soulslike ambientado na Belle Epoque francesa adaptando a historia do livro "As Aventuras de Pinocchio". Estava muito ansiosa com o lançamento, já que vinha acompanhando notícias sobre e havia gostado muito da demo disponibilizada. Após jogar, posso dizer que é um dos meus jogos favoridos do gênero (acima até de jogos da FromSoftware!), e por ter apreciado tanto fui inspirada a fazer um desenho que representa a jornada do protagonista. Espetacular em todos os sentidos.',
      img: [images.riseofp],
    },

    {
      sub: "#PixelArt",
      date: "25/03/2023",
      title: "Totofamily",
      body: "Um desenho feito no Aseprite de uma família da linha evolutiva do Totodile (Totodile & Feraligatr) pois estava com muita vontade de usar o programa novamente. Muitos detalhes poderiam ser revisitados e melhorados, mas deixarei projetos melhores do que esse para serem executados no futuro.",
      img: [images.totofamily],
    },

    {
      sub: "#PixelArt",
      date: "30/01/2023",
      title: "Lysandra, Tiefling Druida",
      body: "No final do ano passado, fui convidada para fazer parte de uma mesa de RPG mestrada por um amigo. Nunca participei antes, então estou um pouco ansiosa com o funcionamento de uma aventura desse tipo. Andei lendo pela internet que é comum os jogadores representarem visualmente seus personagens de alguma forma, então resolvi desenhar a minha personagem, Lysandra, usando o Aseprite. Foi um trabalho bem divertido e relaxante de se fazer, e usar o Aseprite está fazendo meu amor pelo programa crescer cada vez mais... Enfim, aí está Lysandra, uma Tiefling que se tornou druida!",
      img: [images.lysandra],
    },

    {
      sub: "#GameDev, #PixelArt",
      date: "23/12/2023",
      title: '"Projeto | Aseprite"',
      body: "Iniciei um pequeno projeto no Aseprite para uma oportunidade de emprego. Infelizmente não consegui a vaga, mas gostei muito do resultado. Nunca havia usado o Aseprite e adorei a ferramenta! Simples, direta, fácil de aprender a usar e muito eficiente. Essas são as cenas que criei, com um protagonista, um inimigo e diversos itens e equipamentos que podem ser usados no decorrer de sua aventura, que seria uma mistura de vários gêneros. ",
      img: [
        images.projeto1,
        images.projeto2,
        images.projeto3,
        images.projeto4,
        images.projeto5,
      ],
    },

    {
      sub: "#DigitalArt",
      date: "10/09/2022",
      title: "Ouran x ELLE",
      body: 'Às vezes a vontade de desenhar bate do nada numa tarde de domingo e a única solução é fazer o que seu cérebro manda e começar a rabiscar. Desde que assisti à "Ouran High School Host Club" na adolescência, nunca deixei de amar tudo que envolve essa história e seus personagens; e o que melhor para testar minhas habilidades de design do que fazer a capa de uma revista de moda com meus personagens favoritos do mangá, usando como referência a capa da revista ELLE? Admito que fiquei muito feliz com o resultado dessa brincadeira, e parabéns a quem entender todas as referências!',
      img: [images.suits],
    },
  ];

  return (
    <div className={styles.posts}>
      {blogPost.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
