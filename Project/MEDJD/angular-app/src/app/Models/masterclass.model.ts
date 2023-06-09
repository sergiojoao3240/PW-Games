
export type ResponseMasterClasses = MasterClass[]

export interface MasterClass {
  _id: string
  title: string
  description: string
  image_dir: string
  time: string
  date:string
  place: string
  link: string
  year: string
  __v: number
}

export interface ResponseMasterClass {
  _id: string
  title: string
  description: string
  image_dir: string
  time: string
  date:string
  place: string
  link: string
  year: string
  __v: number
}

export interface RequestMasterClass {
  _id: string
  title: string
  description: string
  image_dir: string
  time: string
  date:string
  place: string
  link: string
  year: string
  __v: number
}


export interface RequestMasterClassC {
  title: string
  description: string
  image_dir: string
  time: string
  date:string
  place: string
  link: string
  year: string
}