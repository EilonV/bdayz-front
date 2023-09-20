import { NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
    let cookies
    if (document.cookie) cookies = document.cookie.split(";");
    const navigate = useNavigate()
    const removeCookies = () => {
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
        navigate('/login')
    }
    const toggleHamburger = () => {
        const hamburger = document.querySelector('#checkbox')
        const nav = document.querySelector('.nav-ul')
        hamburger.checked ? nav.classList.remove('active') : nav.classList.add('active')
    }
    const closeHamburger = () => {
        const hamburger = document.querySelector('#checkbox')
        const nav = document.querySelector('.nav-ul')
        hamburger.checked = false
        nav.classList.remove('active')
    }
    if (cookies) var name = cookies[1].split('=')[1]
    return <header className="main-layout">
        <nav className="flex align-center space-between">
            <span className="logo">ZYADB</span>
            <div className="header-links">
                <ul className="nav-ul flex align-center">
                    <li>
                        <NavLink to="/" onClick={closeHamburger} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>חגיגות</NavLink>
                    </li>
                    <li>
                        {!cookies &&
                            <NavLink to="/login" onClick={closeHamburger} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>התחברות</NavLink>
                        }
                    </li>
                    <li>
                        {!cookies &&
                            <NavLink to="/register" onClick={closeHamburger} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>הרשמה</NavLink>
                        }
                    </li>
                </ul>

                {cookies && <div className="logged-header flex align-center">
                    <p className="logout" onClick={removeCookies}>התנתקות</p>
                    <p className="logged-name">היי, <span>{name}</span> </p>
                </div>}
            </div>
            <div className="hamburger" >
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="toggle" onClick={toggleHamburger}>
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>
            </div>
        </nav>
        {/* <button onClick={removeCookies}>התנתקות</button> */}
    </header>
}