import { useAppDispatch } from '../../app/store.ts'
import { Dispatch } from 'redux'
import { desksApi } from './decks-api.ts'
import { addDeckAC, getDesksAC } from './decks-reducer.ts'
import { FormValues } from './AddNewDeckForm/AddNewDeckForm.tsx'



export const fetchDecksTC=()=>(dispatch:Dispatch)=>{
desksApi.getDesks().then((res) => {
  dispatch(getDesksAC(res.data.items))
})
}

export const addDeckTC=(data:FormValues)=>(dispatch:Dispatch)=>{
  desksApi.addDecks(data).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}


