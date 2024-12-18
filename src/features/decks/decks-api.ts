import axios from 'axios'

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
type ItemsType = {
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

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const desksApi = {
  getDesks() {
    return instance.get<GetResponseType>('/v2/decks')
  }
}
