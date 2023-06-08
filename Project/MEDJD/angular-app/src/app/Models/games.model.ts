export type ResponseGames = Game[]


export interface Game {
  _id: string
  name: string
  authors: string
  description: string
  link: string
  video_dir: string
  date: string
  __v: number
  image_dir: string
}

export interface ResponseGame {
    _id: string
    name: string
    authors: string
    description: string
    link: string
    video_dir: string
    date: string
    __v: number
    image_dir: string
  }

  export interface RequestGame{
    _id: string
    name: string
    authors: string
    description: string
    link: string
    video_dir: string
    date: string
    __v: number
    image_dir: string
  }