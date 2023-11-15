import { useContext } from "react"
import { CalcEngine } from "../engine/CalcEngine"

const getStyleName = btn => {
    const className = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '÷': 'opt',
    }
    return className[btn]
}

const Button = ({ value }) => {
    const { calc, setCalc } = useContext(CalcEngine);

    //User click dot

    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }


    const handleBtnClick = () => {
        const results = {
            ".": commaClick()
        }
        return results[value]
    }
    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}

export default Button