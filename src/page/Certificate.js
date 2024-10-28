import Module from './Certificate.module.css';
import { useState } from 'react';
import TimelineComponent from '../components/references/TimelineComponent';

import { useTranslation } from 'react-i18next';


const Certificate = () => {
    const { t } = useTranslation();
   
    const certificateArray =
        t('certificate.1.certificate', { returnObjects: true }).map((data) => (data));


    const rightHandler = [
        `${Module.container} ${Module.right}`
    ]
    const leftHandler = [
        `${Module.container} ${Module.left}`
    ];

    /*szűrő? */
    const [selectedCategory, setSelectedCategory] = useState('certificate');
    // Kategóriák lekérése
    const categories = ['all', 'experience', 'certificate'];
    const CategoryButtonName = t('certificate.0.type', { returnObjects: true }).map((data) => (data))

    // Kategória kiválasztása
    const selectCategory = (category) => {
        setSelectedCategory(category);
    };

    // Adatok szűrése a kiválasztott kategória alapján
    const filteredExperienceAndCertificate = selectedCategory === 'all'
        ? certificateArray
        : certificateArray.filter((data) => data.categorie.includes(selectedCategory));
    

    return (
        <>
        <div className={Module.filterButtons}>
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => selectCategory(category)}
                            style={{
                                fontWeight: selectedCategory === category ? 'bold' : 'normal',
                            }}
                        >
                            {CategoryButtonName[index]}
                           

                        </button>
                    ))}
                </div>
            <div className={Module.timeline}>
                
                
              
                {filteredExperienceAndCertificate.reverse().map(
                    (data, index) => (
                        <div key={index} className={index % 2 === 0 ? leftHandler : rightHandler} >
                            <TimelineComponent data={data} />

                        </div>
                    )
                )}
            </div>
        </>
    )
}

export default Certificate

