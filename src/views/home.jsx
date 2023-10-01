import { useDispatch } from "react-redux";
import { httpsService } from "../services/https.service"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { getBdayz, addBday, removeBday } from "../store/user/userActions";
import { useEffect, useRef, useState } from "react";
import { HomeGuest } from "../components/home-guest";
import { cookieService } from "../services/cookie.service";

export const Home = () => {
    const bdayz = useSelector(state => state.bdayz)
    const [refresh, setRefresh] = useState()
    const dispatch = useDispatch()
    const addBdayRef = useRef()
    const cookie = document.cookie

    useEffect(() => {
        getBdayzFromDB()
    }, [dispatch, refresh])

    const getBdayzFromDB = () => {
        cookieService.findCookie('id') &&
            httpsService.findById(cookieService.findCookie('id'))
                .then((res) => dispatch(getBdayz(res.data.bdayz)))
    }

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
            .then(() => {
                closeAddBdayModal()
                setRefresh(new Date())
                dispatch(addBday(bday))
            })
    }

    const openAddBdayModal = () => {
        addBdayRef.current.classList.add('active')
    }

    const closeAddBdayModal = () => {
        addBdayRef.current.classList.remove('active')
    }

    const deleteBday = (bday) => {
        httpsService.deleteBday(cookieService.findCookie('id'), bday.bdayId)
            .then(dispatch(removeBday(bday.bdayId)))
    }

    return <section className="home main-layout">

        {cookie ? <div className="bdayz-wrapper flex column">
            <div className="bdayz">
                {bdayz.map((bday) => {
                    return <div className="bday flex align-center space-between" key={bday.bdayId}>
                        <div>
                            <h1>{bday.name}</h1>
                            <p>{displayDate(bday.date)}</p>
                        </div>
                        <button onClick={() => deleteBday(bday)}>הסר</button>
                    </div>
                })}
            </div>
            <button onClick={openAddBdayModal}>הוסף</button>
        </div>
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