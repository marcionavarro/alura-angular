export interface Animal {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  linkes: number;
  comments: number;
  user: number;
}

export type Animais = Array<Animal>;
