import * as C from './style'

export const InputArea = () =>{

    function handleAddIncome() {
        console.log('add income')
    }

    return(
        <C.Container>
            <C.AddIncome onClick={handleAddIncome}>Add Novo Ganho</C.AddIncome>
            <C.AddExpense> Add Despesa </C.AddExpense>
        </C.Container>
    )
}