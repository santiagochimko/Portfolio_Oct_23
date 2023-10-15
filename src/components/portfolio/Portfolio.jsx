import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "Pokemon Pokedex App",
    img: "/pokedex.png",
    desc: "Interactive web application connected to a Pokemon API that allows you to view different Pokémon and all their characteristics. Additionally, it allows you to filter by name and display them in alphabetical or numerical order.",
    href: "https://senpaipokedexapp.netlify.app/",
  },
  {
    id: 2,
    title: "To Do List App",
    img: "/todolistapp.png",
    desc: "The classic To-Do list. It allows you to add tasks, mark them as completed, and delete them. It displays the number of tasks remaining to be completed, allows you to filter by completed and in-progress tasks. Additionally, it features day and night mode.",
    href: "https://santiago-todolistapp.netlify.app/",
  },
  {
    id: 3,
    title: "Audn Music App",
    img: "/audnmusicapp.png",
    desc: "An extensive project that simulates a combination of Tinder and Spotify. It allows you to generate playlists simply by liking and disliking artists, or alternatively, create playlists based on filters such as weather, mood, etc. A database and backend have been created to enable user registration, access to the database, and more. For further details, please visit the GitHub repository below.",
    href: "https://github.com/santiagochimko/AppMusica_Gonzalo_Maximiliano_Santiago",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href} target="_blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;