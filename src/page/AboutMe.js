import classes from './Aboutme.module.css';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PicturesData from '../components/references/PicturesData'
import Connect from '../components/Connect';

let intervalHandle


const Aboutme = () => {
    const { t } = useTranslation();
    const helloWorld = 'Hello World!'
    const [helloWorldText, sethelloWorldText] = useState('');
    const timer = useRef(1);
    const [showUpText, setShowUpText] = useState(false)

    function write() {
        if (timer.current === helloWorld.length) {
            clearInterval(intervalHandle);
            setShowUpText(true);
            return
        }
        timer.current++;
        sethelloWorldText(helloWorld.slice(0, timer.current));
    }

    useEffect(() => {
        intervalHandle = setInterval(write, 200);
    }, [])

    return (
        <>
            <div className={classes.row}>
                <div>
                    <div className={classes.SVG_Profil} />
                    <Connect />
                </div>
                <div>


                    <h1 className={classes.textHelloWorld}>{helloWorldText}<em className={classes.flasshing}></em></h1>
                    {showUpText &&
                        <>
                            <div className={classes.uptext}>
                                {t('homePage')}
                            </div>
                            <div className={classes.row}>
                                <PicturesData />
                            </div>
                        </>

                    }
                </div>







            </div>

        </>
    );
}

export default Aboutme;
