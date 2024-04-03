import Image from "next/image";
import { motion } from "framer-motion";

// Imagens
import ChocolateBar from "../../public/img/chocolate-bar.png";
import ChocolateBonbon from "../../public/img/chocolate-bonbon.png";
import ChocolateRum from "../../public/img/chocolate-rum.png";

function CarouselImage() {
    return(
        <motion.div className="grid col-span-3 grid-flow-row sm:grid-flow-col w-full max-h-full px-3 sm:px-0 gap-10 sm:gap-3.5">
            <motion.div whileHover={{ translateY: -2.5, scale: 1.05 }}>
                <Image src={ChocolateBonbon} className='rounded shadow' sizes="500px" quality={75} style={{objectFit: 'cover', width: '100vw', height: '50vh'}} alt=''></Image>
            </motion.div>
            <motion.div whileHover={{ translateY: -2.5, scale: 1.05 }}>
                <Image src={ChocolateBar} className='rounded shadow' sizes="500px" quality={75} style={{objectFit: 'cover', width: '100vw', height: '50vh'}} alt=''></Image>         
            </motion.div>
            <motion.div whileHover={{ translateY: -2.5, scale: 1.05 }}>
                <Image src={ChocolateRum} className='rounded shadow' sizes="500px" quality={75} style={{objectFit: 'cover', width: '100vw', height: '50vh'}} alt=''></Image>
            </motion.div>
        </motion.div>
    );
}

export default CarouselImage;