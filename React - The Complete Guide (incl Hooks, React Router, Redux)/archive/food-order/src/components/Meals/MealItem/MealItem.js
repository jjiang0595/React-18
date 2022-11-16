import classes from './MealItem.module.css'

const MealItem = props => {
    return (<li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}><p>{props.description}</p></div>
            <div className={classes.price}>${props.price.toFixed(2)}</div>
        </div>
        <div>
            <h2>Amount</h2>
        </div>
    </li>)
}

export default MealItem