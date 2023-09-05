import { NavLink } from "react-router-dom"

export const Header = () => {
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
            </div>
        </nav>
    </header>
}