import { GetResponseType, ItemsType } from './decks-api.ts'
import { FormValues } from './AddNewDeckForm/AddNewDeckForm.tsx'

const initialState = {
  decks: [] as ItemsType[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'GET_DECKS':
      return {...state, decks:action.decks}
    case 'ADD-DECK':{
      console.log('action',action.deck)
      console.log(state.decks)
      const newDeck=action.deck
      return {...state,decks: [newDeck, ...state.decks] }

    }
    default:
      return state
  }
}

type DecksActions = SetDecksAT|AddDeckAT

export const getDesksAC=(decks:ItemsType[])=>{
  return {type:"GET_DECKS" as const,
    decks}
}
export const addDeckAC=(deck:ItemsType)=>{
  return {type:"ADD-DECK" as const,
  deck: deck}
}


type SetDecksAT = ReturnType<typeof getDesksAC>
type AddDeckAT=ReturnType<typeof addDeckAC>
