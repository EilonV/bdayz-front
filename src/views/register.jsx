import { useState } from "react";
import { httpsService } from "../services/https.service";
import { useNavigate } from "react-router-dom";

export const Register = () => {

    const USER_REGEX = /^[A-z][A-z0-9-_!@#$%]{3,23}$/;
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    if (loading) {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }

    const handleRegister = (e) => {
        e.preventDefault()
        let name = e.target[0]
        let email = e.target[1]
        let pass = e.target[2]
        let passAuth = e.target[3]
        let user = {
            name: name.value,
            email: email.value,
            pass: pass.value,
            bdayz: ['']
        }
        httpsService.find(email.value, 'email')
            .then((res) => {
                if (res.data.users.length) {
                    addError(email, 'email')
                }
                else if (pass.value.length < 6) {
                    addError(pass, 'password-short')
                }
                else if (!USER_REGEX.test(pass.value)) {
                    addError(pass, 'password')
                }
                else if (pass.value !== passAuth.value) {
                    addError(passAuth, 'password-aut')
                }
                else {
                    setLoading(true)
                    httpsService.postUser(user)
                    setTimeout(() => {
                        setSuccess(true)
                        navigate('/login')
                    }, 3000);
                }
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

    return <section className="main-layout">

        <div className="login flex justify-center">
            <div className="login-form">
                {!success &&
                    <form id="login" action="/login" method="post" className="flex column align-center" onSubmit={handleRegister}>
                        <h2>הרשמה</h2>
                        <label htmlFor="email">שם מלא</label>
                        <div className="input-wrapper">
                            <input name="fullname" id="fullname" type="fullname" placeholder="הכנס שם מלא" autoComplete="fullname" />
                        </div>
                        <label htmlFor="email">אימייל</label>
                        <div className="input-wrapper">
                            <input name="email" id="email" type="email" placeholder="הכנס אימייל" autoComplete="email" onKeyDown={(e) => resetError(e.target, 'email')} />
                        </div>
                        <label htmlFor="pass">סיסמא</label>
                        <div className="input-wrapper">
                            <input id="pass" type="password" placeholder="הכנס סיסמא" maxLength={24} onKeyDown={(e) => resetError(e.target, 'password')} />
                        </div>
                        <label htmlFor="pass-auth">אימות סיסמא</label>
                        <div className="input-wrapper">
                            <input id="pass-auth" type="password" placeholder="הכנס סיסמא" maxLength={24} onKeyDown={(e) => resetError(e.target, 'password-aut')} />
                        </div>
                        <button>
                            {loading ? <div className="loader">
                                <div className="loader1"></div>
                                <div className="loader2"></div>
                                <div className="loader3"></div>
                            </div> : 'הרשמה'}
                        </button>


                    </form>
                }
                {success &&
                    <form>
                        <div className="successful-register flex column align-center">
                            <h2>🍰🎉!מזל טוב</h2>
                            <p>,שמחים שהצטרפתם לחגיגות
                                <br />
                                התחברו בשביל להתחיל לחגוג
                            </p>
                            <button><a href="/login">להתחברות</a></button>
                        </div>
                    </form>
                }
            </div>

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