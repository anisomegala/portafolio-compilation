import React, {useState, useEffect} from 'react';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import './homepage.style.scss';
import Directory  from '../../component/portafolioDirectory/portafolioDirectory.component';
import  { motion } from 'framer-motion';
import { PageVariantsHome } from '../../component/animations/animations.component';


const HomePage = () => {
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
       },[])
    
   return ( 
       <div>
       {
        loading ? 
            <RingLoader
              size={50}
              color={""}              
              loading={loading}
              css={style}
            />
           :
           <motion.div 
                exit='out'
                animate='in'
                initial='out' 
                variants={PageVariantsHome}
                transition={{type: "spring", stiffness: 100}}
                className="homepage">
                <Directory />
            </motion.div>
       }
   </div>
   )
};

const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
export default HomePage;