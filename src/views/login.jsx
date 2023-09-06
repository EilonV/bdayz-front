export const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(e);
    }

    return <section className="main-layout">
        <div className="login flex justify-center">
            <form  id="login" action="/login" method="post" className="flex column align-center" onSubmit={handleLogin}>
                <label htmlFor="email">אימייל</label>
                <input name="email" id="email" type="email" placeholder="הכנס אימייל" autocomplete="email"/>
                <label htmlFor="pass">סיסמא</label>
                <input id="pass" type="password" placeholder="הכנס סיסמא" />
                <button>התחברות</button>
            </form>

            <div class="cake-wrapper">
                <div class="bdayCake">
                    <div class="plate"></div>
                    <div class="cream"></div>
                    <div class="candle"></div>
                    <div class="flame">
                        <div class="one">+</div>
                        <div class="two">+</div>
                        <div class="three">+</div>
                    </div>
                </div>
            </div>

        </div>
    </section>
}