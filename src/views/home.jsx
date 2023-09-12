import { httpsService } from "../services/https.service"

export const Home = () => {
    const user = {
        id: '123123',
        name: 'eiloni vani',
        bdayz: [
            {
                name: 'נונה בנונה',
                date: new Date(1914, 10, 1)
            },
            {
                name: 'גאיולי שאיולי',
                date: new Date(1995, 4, 2)
            },
            {
                name: 'לוק הדלוק',
                date: new Date(1995, 12, 27)
            }
        ]
    }

    const displayDate = (date) => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    const addBday = () => {
        const data = {
            "name": "eilonki pilonki",
            "date": Date.now(),
        }
        httpsService.addBday('64fc85085e90bb58b91cf234',data)
    }

    return <section className="home main-layout">
        <div className="bdayz">
            {user.bdayz.map((bday) => {
                return <div className="bday" key={bday.name}>
                    <h1>{bday.name}</h1>
                    {displayDate(bday.date)}
                </div>
            })}
        </div>
        <button onClick={addBday}>הוסף</button>
    </section>
}