import { useState } from "react";
import { httpsService } from "../services/https.service";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        let email = e.target[0]
        let pass = e.target[1]
        httpsService.find(email.value, 'email')
            .then((res) => {
                if (res.data.users.length < 0) addError(email, 'email-404')
                else if (res.data.users[0].password !== pass.value)
                    addError(pass, 'bad-password')
                else successfulLogin(res.data.users[0]._id, res.data.users[0].name)
            })
    }

    const addError = (el, type) => {
        el.parentElement.classList.add('error')
        el.parentElement.classList.add(type)
    }

    const resetError = (el, type) => {
        el.parentElement.classList.remove('error')
        el.parentElement.classList.remove(type)
    }

    const successfulLogin = (id, name, img) => {
        document.cookie = `id = ${id}`
        document.cookie = `name=${name}`
        setLoading(true)
        setTimeout(() => {
            navigate("/")
        }, 2500);
    }
    return <section className="main-layout">
        <div className="login flex justify-center">
            <form id="login" action="/login" method="post" className="flex column align-center" onSubmit={handleLogin}>
                <h2>🎈התגעגענו</h2>
                <label htmlFor="email">אימייל</label>
                <div className="input-wrapper">
                    <input name="email" id="email" type="email" placeholder="הכנס אימייל" autoComplete="email" onClick={(e) => resetError(e.target, 'email-404')} onKeyDown={(e) => resetError(e.target, 'email-404')} />
                </div>
                <label htmlFor="pass">סיסמא</label>
                <div className="input-wrapper">
                    <input id="pass" type="password" placeholder="הכנס סיסמא" onKeyDown={(e) => resetError(e.target, 'pass')} onClick={(e) => resetError(e.target, 'pass')} />
                </div>
                <button>
                    {loading ? <div className="loader">
                        <div className="loader1"></div>
                        <div className="loader2"></div>
                        <div className="loader3"></div>
                    </div> : 'התחברות'}
                </button>
            </form>

            <div className="cake-wrapper">
                <div className="bdayCake">
                    <div className="plate"></div>
                    <div className="cream"></div>
                    <div className="candle"></div>
                    <div className="flame">
                        <div className="one">+</div>
                        <div className="two">+</div>
                        <div className="three">+</div>
                    </div>
                </div>
            </div>

        </div>
    </section>
}