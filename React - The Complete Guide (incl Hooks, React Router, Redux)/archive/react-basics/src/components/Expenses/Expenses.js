import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem";
import {useState} from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />))}
            </Card>
        </div>
    );
}

export default Expenses
