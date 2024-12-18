import axios from 'axios'
import { FormValues } from './AddNewDeckForm/AddNewDeckForm.tsx'

export type GetResponseType = {
  items: ItemsType[]
  pagination: PaginationType
}

type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
type AuthorType = {
  id: string
  name: string
}
export type ItemsType = {
  author: AuthorType
  isFavorite: boolean
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type AddDeckRespType = Omit<ItemsType, 'author'|'isFavorite'>

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const desksApi = {
  getDesks() {
    return instance.get<GetResponseType>('/v2/decks')
  },
  addDecks(data:FormValues) {
    return instance.post<AddDeckRespType>('/v1/decks', data)
  }
}
