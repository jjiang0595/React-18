import classes from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect, useState} from "react";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    const [httpError, setHttpError] = useState()

    useEffect(() => {
        const fetchMeals = async () => {
            setLoading(true)
            const response = await fetch('https://react-http-1870f-default-rtdb.firebaseio.com/meals.json')

            if (!response.ok) {
                throw new Error('Something went wrong.')
            }

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
            setLoading(false)
        };
        fetchMeals().catch(error => {
            setLoading(false)
            setHttpError(error.message)
        })

    }, [])

    if (loading) {
        return <section className={classes.MealsLoading}>
            <p>Loading...</p>
        </section>
    }

    if (httpError) {
        return <section className={classes.MealsError}>
            <p>{httpError}</p>
        </section>
    }

    const mealsList = meals.map(meal => (
        <li>
            <MealItem
                id={meal.id}
                key={meal.id}
                {...meal} />
        </li>
    ))

    return <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
}

export default AvailableMeals
