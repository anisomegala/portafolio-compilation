import React from 'react';
import { motion } from 'framer-motion';
import { TextVariants } from '../animations/animations.component';
import CloseIconPage from '../closeIcon/closeIcon.component';
 
import './resume.style.scss';

const Resume = () => (
    <div className='resume'> 
        <div className='resume-content'>
        <CloseIconPage />
            <h1> My Bio </h1>
            <motion.p
                initial='out'
                animate='in'
                exit='out'
                variants={ TextVariants}
                transition={{duration: 2}}
            > 
            I am a Cuban musician currently based in Poland. I have lived and performed in various countries such as the UAE, Germany, Portugal, Spain, Sri Lanka and Brazil. Holding a degree in Arts and Music from the renowned Amadeo Roldan Conservatory in Havana, I've been developing my international career not only playing acoustic and electric bass with many renowned artists but also collaborating as a composer and arranger with artists such as Giovanni Hidalgo, Pepe Cisneros, Yaniel Matos, Dona Inhá, Felipe Lamoglia, Joaquin Betancourt, Fernando Ferrer, Eduardo Espasande, Alejandro Aviles, NelsonAires, Luedji Luna, Sebastian Notini, Nailor Azevedo (The Proveta), Yasek Manzano, Spanish Ballet From Cuba, and many others. I also give private lessons and lead workshops in music theory, jazz, and Latin jazz, Afro-Cuban and Caribbean music.
Currently, for summer 2021, I've got dates booked to perform at jazz festivals, corporate events and commercial venues all over Poland.
            </motion.p>
            
        </div>
    </div>
);

export default Resume;