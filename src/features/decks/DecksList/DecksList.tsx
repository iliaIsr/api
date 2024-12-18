import s from './DecksList.module.css'
import { desksApi, GetResponseType, ItemsType } from '../decks-api.ts'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDesksAC } from '../decks-reducer.ts'
import { AppRootState, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectDecks } from '../decks-selectors.ts'
import { fetchDecksTC } from '../decks-thunks.ts'
import { useFetchDecks } from './DeckItem/useFetchDecks.ts'

export const DecksList = () => {
 const {decks}=useFetchDecks()

  return (
    <ul className={s.list}>
      {decks.map((deck) => {
        return <DeckItem key={deck.id} deck={deck} />
      })}
    </ul>
  )
}
