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
    const { calc, setCalc } = useContext(CalcEngine)

    //User click comma

    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }

    //Use click AC button

    const allClear = () => {
        setCalc({
            sign: '',
            num: 0,
            res: 0
        })
    }


    const handleBtnClick = () => {
        const results = {
            ".": commaClick,
            "AC": allClear
        }
        return results[value]()
    }
    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}

export default Button