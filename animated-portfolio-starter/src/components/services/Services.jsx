import "./services.scss"
import React, { useRef } from "react";
import { motion, useInView} from "framer-motion"

const variants = {
  initial:{
    x:-500,
    y:100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      straggerChildren:0.1,
    },
  },
};

const Services = () => {

  const ref = useRef()

   const isInView = useInView(ref,{margin:"-100px"})


  return (
    <motion.div 
    className="services" 
    variants={variants} 
    initial="initial" 
    ref={ref} 
    animate={isInView && "animate"} 
    >
      <motion.div className="textContainer" variants={variants}>
        <p>Markanızın Gelişimine Yön Veriyorum: Büyüme, Yenilik, Başarı</p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>İşletmeniz</motion.b> İçin
            </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Eşsiz</motion.b> Fikirler
            </h1>
            <button>Ne Yapıyoruz?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Dinamik Web Tasarımı</h2>
          <p>
          Gelişmiş teknolojiyi kullanarak, işletmenizin benzersiz kimliğini yansıtan, etkileşimli ve kullanıcı dostu web siteleri tasarlıyoruz. Mobil uyumluluk, SEO optimizasyonu ve modern tasarım anlayışıyla, markanızın çevrimiçi görünürlüğünü maksimize ediyoruz.

      
          </p>
          <button>Git</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>E-Ticaret Çözümleri</h2>
          <p>
          Güçlü ve güvenilir e-ticaret platformları geliştirerek, ürünlerinizi etkili bir şekilde sergilemenizi ve satışlarınızı artırmanızı sağlıyoruz. Özelleştirilebilir arayüzler, güvenli ödeme sistemleri ve kullanıcı dostu alışveriş deneyimiyle işletmenizin çevrimiçi ticaret potansiyelini keşfedin

          
          </p>
          <button>Git</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Veri Analitiği Entegrasyonu</h2>
          <p>
          İşletmenizin web sitesine entegre edeceğimiz gelişmiş veri analitiği araçlarıyla, müşteri davranışlarını anlayın ve stratejilerinizi buna göre şekillendirin. Ziyaretçi etkileşimlerinden elde edilen verilerle daha bilinçli kararlar alın ve pazarlama faaliyetlerinizi optimize edin

         
          </p>
          <button>Git</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Sosyal Medya Entegrasyonu</h2>
          <p>
          İşletmenizin sosyal medya varlığını güçlendirecek entegrasyonlarla, marka bilinirliğinizi artırıyoruz. Sosyal medya platformlarıyla entegre web siteleri sayesinde, müşterilerinizle etkileşimi artırın ve markanızın çevrimiçi topluluklarla bağını güçlendirin.

          
          </p>
          <button>Git</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services