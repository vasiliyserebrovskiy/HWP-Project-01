export const Gender = {
  female: "женский",
  male: "мужской",
} as const;

export const InterfaceComponents = {
  name: "Имя: ",
  gender: "Пол: ",
  country: "Страна: ",
  probability: "Вероятность: ",
  remaining_credits: "Остаток запросов",
} as const;

export interface ResObj {
  name: string;
  gender: string;
  country: string;
  probability: number;
  remaining_credits: number;
}
