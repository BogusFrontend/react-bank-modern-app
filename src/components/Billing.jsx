import { apple, bill, google } from '../assets';
import styles, { layout } from "../style";

const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img className="w-[100%] h-[100%] relative z-[5]" src={bill} alt="billing"/>
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
            <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Easily control your
                <br className="sm:block hidden"/> billing & invoicing
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Lorem ipsum dolor sit amet, consecrate radicalising elite.
                Underused dolor equal ease id image labor nam, official quod escape temporise!
                A ab cum dolorous enum est explicable harm libero Podio,
                option redundancy sapient, temporal, vel!
            </p>

            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" src={apple} alt="apple store"/>
                <img className="w-[128px] h-[42px] object-contain  cursor-pointer" src={google} alt="google play"/>
            </div>

        </div>
    </section>
)

export default Billing;