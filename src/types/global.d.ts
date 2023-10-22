export {}

declare global {
  //* Interfaces
  interface IClientWork {
    slug: string
    name: string
    cover: string
    videoCover?: string
    images: string[]
    videos?: string[]
  }
  //* Types

  type StateType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}
