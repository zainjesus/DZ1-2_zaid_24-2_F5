import { NavLink, Outlet } from "react-router-dom"

const activeMenuClass = ({isActive}) => isActive ? 'active-menu' : ''

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to={'/'} className={activeMenuClass}>Home</NavLink> </li>
                    <li><NavLink to={'/posts'} className={activeMenuClass}>Posts</NavLink> </li>
                    <li><NavLink to={'/posts/create'} className={activeMenuClass}>Create Post</NavLink> </li>
                </ul>
            </nav>
            <div className="container">
                <Outlet />
            </div>
            <footer>DZ1</footer>
        </>
    )
}
export default Layout