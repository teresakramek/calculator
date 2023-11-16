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

    //User click AC button

    const allClear = () => {
        setCalc({
            sign: '',
            num: 0,
            res: 0
        })
    }

    //User click number btn

    const handleClickButton = () => {
        
        const numberString = value.toString()

        let numberValue
        console.log(numberString === '0' && calc.num === 0)
        if(numberString === '0' && calc.num === 0) {
            numberValue = "0"
        } else {
            console.log(numberValue = Number(calc.num + numberString))
            numberValue = Number(calc.num + numberString)
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }


    const handleBtnClick = () => {
        const results = {
            ".": commaClick,
            "AC": allClear
        }
        if(results[value]){
           return results[value]() 
        } else {
            return handleClickButton()
        }
    }
    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}

export default Button