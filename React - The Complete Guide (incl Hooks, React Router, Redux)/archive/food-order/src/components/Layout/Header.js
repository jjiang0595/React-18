import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import MealsSummary from "./MealsSummary";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="A table full of delicious food"/>
            </div>
            <MealsSummary />
        </>
    )
}

export default Header