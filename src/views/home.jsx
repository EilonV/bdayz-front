import { useDispatch } from "react-redux";
import { httpsService } from "../services/https.service"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import { getBdayz, getUser } from "../store/user/userActions";
import { useEffect } from "react";

export const Home = () => {
    const bdayz = useSelector(state => state.bdayz)
    const dispatch = useDispatch()

    useEffect(() => {
        document.cookie &&
            httpsService.findById('64fe12d573d408fa80270c8d')
                .then((res) => dispatch(getBdayz(res.data.bdayz)))
    }, [dispatch])
    // const user = {
    //     id: '123123',
    //     name: 'eiloni vani',
    //     bdayz: [
    //         {
    //             name: 'נונה בנונה',
    //             date: new Date(1914, 10, 1)
    //         },
    //         {
    //             name: 'גאיולי שאיולי',
    //             date: new Date(1995, 4, 2)
    //         },
    //         {
    //             name: 'לוק הדלוק',
    //             date: new Date(1995, 12, 27)
    //         }
    //     ]
    // }

    const displayDate = (date) => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    const addBday = () => {
        const data = {
            "name": "eilonki pilonki",
            "date": Date.now(),
        }
        httpsService.addBday('64fc85085e90bb58b91cf234', data)
    }

    return <section className="home main-layout">
        <div className="bdayz">
            {bdayz.map((bday) => {
                return <div className="bday" key={bday.name}>
                    <h1>{bday.name}</h1>
                    <p>{bday.date}</p>
                    {/* {displayDate(bday.date)} */}
                </div>
            })}
        </div>
        <button>הוסף</button>
    </section>
}