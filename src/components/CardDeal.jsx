import styles, { layout } from '../style';
import { card } from '../assets';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Find a better card deal
                <br className="sm:block hidden"/> in few easy steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consequatur consequuntur ea excepturi facilis laboriosam neque perspiciatis repellendus soluta.
            </p>

            <Button styles="mt-10" />
        </div>

        <div className={layout.sectionImg}>
            <img className="w-[100%] h-[100%]" src={card} alt="card"/>
        </div>
    </section>
)

export default CardDeal;