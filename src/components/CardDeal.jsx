import { card } from '../assets';
import styles , { layout } from '../styles';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' />
      in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Maecenas eu neque et est sagittis posuere. Cras dolor sem, dignissim
       vitae felis non, pharetra rutrum velit.
      Quisque vestibulum mi eu elit auctor,</p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)


export default CardDeal
