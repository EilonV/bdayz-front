import { NavLink } from "react-router-dom"

export const Header = () => {
    const removeCookies = () => {
        const cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
          console.log(cookies[0]);
        }
    }
    return <header className="main-layout">
        <nav className="flex align-center space-between">
            <span className="logo">ZYADB</span>
            <div className="flex align-center header-links">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>חגיגות</NavLink>
                <NavLink to="/login" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>התחברות</NavLink>
                <NavLink to="/register" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>הרשמה</NavLink>
            </div>
        </nav>
        <button onClick={removeCookies}>התנתקות</button>
    </header>
}