import { Dispatch } from 'react'
import { DateRange } from 'react-day-picker'

export {}

declare global {
  //* Interfaces
  interface IClientWork {
    name: string
    cover: string
    images: string[]
    videos: never[]
  }
  //* Types

  type StateType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}
