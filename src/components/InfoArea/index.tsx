import * as C from './styles'
import { formatCurrentMonth} from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'

type Props = {
    currentMonth: string,
    onMonthChange: (newMonth: string)=> void,
    income: number,
    expense: number;
    balance: number;
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense, balance}: Props) => {
    
    function handlePrevMonth(){
       let [year, month] = currentMonth.split('-');
       let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
       currentDate.setMonth( currentDate.getMonth() -1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}}`)
    }

    function handleNextMonth(){
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth( currentDate.getMonth() +1)
         onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}}`)
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="receitas" value={income}/>
                <ResumeItem title="despesas" value={expense}/>
                <ResumeItem title="balanço" value={income - expense} color={(income-expense) < 0 ? 'red': 'green'}/>
                <ResumeItem title='total' value={balance} color={(balance) < 0 ? 'red': 'green'}/>
            </C.ResumeArea>
        </C.Container>
    )
}