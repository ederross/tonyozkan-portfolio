export {}

declare global {
  //* Interfaces
  interface IPortfolio {
    slug: string
    name?: string
    image: string
  }
  interface IClientWork {
    slug: string
    name: string
    cover: string
    videoCover?: string
    images: string[]
    videos?: string[]
  }
  interface IFilm {
    isComingSoon?: false
    slug: string
    name: string
    cover: string
    videosId: string[]
    images: string[]
  }
  //* Types

  type StateType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}
