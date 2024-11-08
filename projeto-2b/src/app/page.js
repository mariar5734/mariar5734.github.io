import styles from "./page.module.css";
import Image from "next/image";
import carro from "/public/Images/casa.webp";


  const carro = '/images'carro.png';
  export default function Hoome() {
    return (
      <div>
          <h1>Meu título</h1>
          <Image className={styles.img} src='/images/ifro.jpg' alt="Imagem do IFRO-Campos Vilhena"
          width={200} height={200} / >

          <Image className={styles.img} src={casa} alt="Imagem de casa" width={200} height={200}
          style={{maxWidth: '200px', minHeight: '200px'}} layout="responsive" />

          <Image className={style.img} src={carro} alt="Imagem de carro" width={200} height={200} />
    
        </div>
    );
  }

