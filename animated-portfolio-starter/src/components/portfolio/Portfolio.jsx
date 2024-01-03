import React, { useRef } from 'react';
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "JavaScript Uzmanlığı",
    img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Web projelerinizde esnek ve güçlü bir dil olan JavaScript'i kullanarak, etkileşimli ve hızlı yüklenen web sayfaları tasarlıyorum. ES6 ve sonrasındaki modern JavaScript özelliklerine hakimiyetimle, tarayıcı tabanlı uygulamalarınızı optimize ediyorum.."
  },
  {
    id: 2,
    title: "React Geliştirme ",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Modern ve dinamik web uygulamaları geliştirmede React'ın gücünden yararlanıyorum. Komponent tabanlı yaklaşım ve yenilikçi çözümlerle, kullanıcı deneyimini zenginleştiren interaktif arayüzler oluşturuyorum."
  },
  {
    id: 3,
    title: "Responsive Web Tasarımı ",
    img: "https://www.fikirisler.com/wp-content/uploads/2018/08/responsive-web-tasarim-nedir.jpg",
    desc: "Her cihazda mükemmel görünen web siteleri oluşturmak için responsive tasarım tekniklerini uyguluyorum. Mobil, tablet ve masaüstü cihazlarda sorunsuz bir kullanıcı deneyimi sağlamak için CSS3 ve Flexbox gibi teknolojileri kullanıyorum."
  },
  {
    id: 4,
    title: "Backend Geliştirme (Node.js/Express.js)",
    img: "https://s3.eu-central-1.amazonaws.com/workingtalent-cms/media/_1600x900_crop_center-center_100_none/wat-doet-back-end-developer.png",
    desc: "Sunucu tarafı geliştirmede Node.js ve Express.js kullanarak, hızlı ve güvenilir web uygulamaları oluşturuyorum. RESTful API'lar ve veritabanı entegrasyonlarıyla, web projelerinize güçlü backend çözümleri sunuyorum."
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-600, 600]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>

            
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>Gör</button>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Öne Çıkan Bilgiler</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
