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
    if (cookies) var name = cookies[1].split('=')[1]
    return <header className="main-layout">
        <nav className="flex align-center space-between">
            <span className="logo">ZYADB</span>
            <div className="header-links flex align-center ">

                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>חגיגות</NavLink>

                {!cookies &&
                    <NavLink to="/login" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>התחברות</NavLink>
                }

                {!cookies &&
                    <NavLink to="/register" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>הרשמה</NavLink>
                }

                {cookies && <div className="logged-header flex align-center">
                    <p className="logout" onClick={removeCookies}>התנתקות</p>
                    <p className="logged-name">היי, <span>{name}</span> </p>
                </div>}

            </div>
        </nav>
        {/* <button onClick={removeCookies}>התנתקות</button> */}
    </header>
}