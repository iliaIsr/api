import s from './DecksList.module.css'
import { desksApi } from '../decks-api.ts'
import { useEffect } from 'react'

export const DecksList = () => {
  useEffect(()=>{
    desksApi.getDesks()
  },[])
  return <ul className={s.list}></ul>
}
