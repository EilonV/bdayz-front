import { useDispatch } from "react-redux";
import { httpsService } from "../services/https.service"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import { getBdayz, getUser } from "../store/user/userActions";
import { useEffect, useRef } from "react";
import present from '../assets/imgs/present.svg'
import balloon from '../assets/imgs/balloons.svg'
import { HomeGuest } from "../components/home-guest";

export const Home = () => {
    const bdayz = useSelector(state => state.bdayz)
    const dispatch = useDispatch()
    const addBdayRef = useRef()
    const cookie = document.cookie
    useEffect(() => {
        cookie &&
            httpsService.findById('64fe12d573d408fa80270c8d')
                .then((res) => dispatch(getBdayz(res.data.bdayz)))
    }, [dispatch])

    const displayDate = (date) => {
        return `${new Date(date).getDay()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`
    }

    const addBday = () => {
        const data = {
            "name": "eilonki pilonki",
            "date": Date.now(),
        }
        httpsService.addBday('64fc85085e90bb58b91cf234', data)
    }

    const handleBdayForm = (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const date = e.target[2].value
        const bday = {
            name: e.target[0].value,
            date: e.target[2].value
        }
        console.log('NAME DATE', name, date);
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
                return <div className="bday" key={bday.name}>
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
                <input type="text" name="name" id="name" />
                <label htmlFor="date">תאריך החוגג</label>
                <input type="date" name="date" id="date" min="1900-01-01" max={`${new Date().getFullYear()}-12-31`} />
                <button >הוספה</button>
            </form>
        </div>
    </section>
}