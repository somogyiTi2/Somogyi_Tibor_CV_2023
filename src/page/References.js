import Card from '../components/references/Card';
import classes from './References.module.css';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';

const References = () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const { t } = useTranslation();
    const ReferencesArray = t('References', { returnObjects: true }).map((data) => (data));

    let categoriesArr = ['all'];
    ReferencesArray.map((data) => data.category.map(e => categoriesArr.push(e)));
    let uniqueChars = [...new Set(categoriesArr.filter(e => e !== undefined))];



    // Kategória kiválasztása
    const selectCategory = (category) => {
        setSelectedCategory(category);
    };

    // Adatok szűrése a kiválasztott kategória alapján
    const filteredThings = selectedCategory === 'all'
        ? ReferencesArray
        : ReferencesArray.filter((data) => data.category.includes(selectedCategory));

    return (
        <>
            <input className={classes.search} onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
                placeholder='Keress...'></input>
            <div className={classes.search}>
        
                {uniqueChars.map((element) => (

                    <button
                        key={element}
                        onClick={() => selectCategory(element)}
                        style={{
                            fontWeight: selectedCategory === element ? 'bold' : 'normal',
                        }}
                    >
                        {element}
                    </button>

                ))}
            </div>
          
            {filteredThings.filter((data) => {
                return search.toLocaleLowerCase() === '' ? data :
                    data.title.toLocaleLowerCase().includes(search)
            }).reverse()
                .map((data, index) => (

                    <div
                        key={index}
                        className={classes.column}>
                        <Card data={data} />
                    </div>

                ))

            }

        </>
    )
}

export default References;