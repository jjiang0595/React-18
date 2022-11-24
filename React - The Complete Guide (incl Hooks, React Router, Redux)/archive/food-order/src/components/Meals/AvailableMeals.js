import classes from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect, useState} from "react";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-http-1870f-default-rtdb.firebaseio.com/meals/meals.json')
            const responseData = await response.json()

            const loadedMeals = []

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadedMeals)
        };
        fetchMeals()
    }, [])

    console.log(meals)
    const mealsList = meals.map(meal => (
        <li>
            <MealItem
                id={meal.id}
                key={meal.id}
                {...meal} />
        </li>
    ))

    return <section className={classes.meals}>
        <ul>
            <Card>{mealsList}</Card>
        </ul>
    </section>
}

export default AvailableMeals
