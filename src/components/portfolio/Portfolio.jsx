import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Wanderlust",
    img : "wanderlust.png",
    link: "https://wanderlust-2epf.onrender.com/listings",
    desc: "Wanderlust is a robust full stack application developed using HTML, CSS, Bootstrap, EJS, JavaScript, Node.js, Express, MongoDB, Passport, and Cloudinary. The application leverages the MVC framework, enabling users to add and delete property listings and reviews. Additionally, a robust user authentication and authorization system using Passport.js was engineered, improving data privacy and security for users and reducing unauthorized access incidents."
  },
  {
    id: 2,
    title: "Notes Snapper",
    link:"https://github.com/arman92004/Notes-Snapper/tree/main",
    img: "icon.png",
    desc: "Developed a Chrome extension using JavaScript and the Chrome API for capturing and annotating YouTube video frames. The extension enables seamless export of annotated frames into PDFs, enhancing student study aids. It also boosts productivity and collaboration by integrating local storage for structured documentation and easy sharing of annotated video frames with peers and educators.",
  },
  {
    id: 3,
    title: "Sorting Visualiser",
    img: "sorter.png",
    link:"https://sortingg-visualiserr.netlify.app/",
    desc: "Engineered an interactive sorting visualizer using modern web technologies, demonstrating step-by-step processes for algorithms like Bubble Sort, Selection Sort, and Insertion Sort. This enhanced user understanding by 40% through visual aids. Users can select different sorting algorithms and watch the visual representation of the sorting process in real-time.",
  },
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
            <a href={item.link}><button>See Demo</button></a>
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
