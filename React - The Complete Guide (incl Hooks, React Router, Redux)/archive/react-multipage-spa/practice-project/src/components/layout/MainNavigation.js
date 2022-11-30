import classes from "./MainNavigation.module.css"
import {NavLink} from "react-router-dom";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <p className={classes.logo}>Great Quotes</p>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to="/allQuotes">All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/addQuote">Add a Quote</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation