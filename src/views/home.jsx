import { useDispatch } from "react-redux";
import { httpsService } from "../services/https.service"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { getBdayz } from "../store/user/userActions";
import { useEffect, useRef, useState } from "react";
import { HomeGuest } from "../components/home-guest";
import { cookieService } from "../services/cookie.service";

export const Home = () => {
    const bdayz = useSelector(state => state.bdayz)
    const [data, setData] = useState()
    const dispatch = useDispatch()
    const addBdayRef = useRef()
    const cookie = document.cookie

    useEffect(() => {
        cookie &&
            httpsService.findById(cookieService.findCookie('id'))
                .then((res) => dispatch(getBdayz(res.data.bdayz)))
    }, [dispatch, cookie])

    function displayDate(bdayDate) {
        const date = new Date(bdayDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const handleBdayForm = (e) => {
        e.preventDefault()
        const bday = {
            name: e.target[1].value,
            date: new Date(e.target[2].value).getTime()
        }
        httpsService.addBday(cookieService.findCookie('id'), bday)
            .then(closeAddBdayModal())
    }

    const openAddBdayModal = () => {
        addBdayRef.current.classList.add('active')
    }

    const closeAddBdayModal = () => {
        addBdayRef.current.classList.remove('active')
    }
    return <section className="home main-layout">
        <div className="bdayz">
            {bdayz.map((bday) => {
                return <div className="bday" key={bday.id}>
                    <h1>{bday.name}</h1>
                    <p>{displayDate(bday.date)}</p>
                </div>
            })}
        </div>

        {cookie ?
            <button onClick={openAddBdayModal}>הוסף</button>
            :
            <HomeGuest />
        }

        <div className="add-bday-modal full" ref={addBdayRef}>
            <div className="bg" onClick={closeAddBdayModal}></div>
            <form className="add-bday-form flex column align-center" onSubmit={handleBdayForm}>
                <button type="button" className="close-modal" onClick={closeAddBdayModal}>X</button>
                <label htmlFor="name">שם החוגג</label>
                <input type="text" name="name" id="name" required />
                <label htmlFor="date">תאריך החוגג</label>
                <input type="date" name="date" id="date" required min="1900-01-01" max={`${new Date().getFullYear()}-12-31`} />
                <button >הוספה</button>
            </form>
        </div>
    </section>
}