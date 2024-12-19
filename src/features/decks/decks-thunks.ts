import { useAppDispatch } from '../../app/store.ts'
import { Dispatch } from 'redux'
import { desksApi } from './decks-api.ts'
import { addDeckAC, getDesksAC } from './decks-reducer.ts'
import { FormValues } from './AddNewDeckForm/AddNewDeckForm.tsx'
import { Simulate } from 'react-dom/test-utils'
import reset = Simulate.reset



export const fetchDecksTC=()=>(dispatch:Dispatch)=>{
desksApi.getDesks().then((res) => {
  console.log("WOW:",res.data.items)
  dispatch(getDesksAC(res.data.items))
})
}

export const addDeckTC=(data:FormValues)=>(dispatch:Dispatch)=>{
  return  desksApi.addDecks(data).then((res) => {//без return возвращает не промис? и не является асинхронной?
    console.log("WOW2",res.data)
    dispatch(addDeckAC(res.data))
  })
}


