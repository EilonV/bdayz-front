import { useEffect, useState } from 'react'
import present from '../assets/imgs/present-guest.svg'
export const HomeGuest = () => {
    const words = ['נרשמים', 'מוסיפים', 'זוכרים!']
    const [word, setWord] = useState(words[0])

    useEffect(() => {
        const interval = setInterval(() => {
            let index = words.indexOf(word);
            index = index >= words.length - 1 ? 0 : index + 1;
            setWord(words[index]);
        }, 2000);

        return () => clearInterval(interval);
    })

    return <div className="home-guest flex align-center">
        <div className='guest-desc flex column space-evenly'>
            <div className='flex column'>
                <h2>מה לא <span>תחגגו</span> איתנו?</h2>
                <h3>BDAYZ, האתר הכי נוח לקבל תזכורות על ימי הולדת</h3>
            </div>
            <p className='changing-words'>הכי פשוט שיש:&nbsp; <span>{word}</span></p>
        </div>
        <img src={present} alt="a screen showing a present with balloons around it" />
    </div>
}