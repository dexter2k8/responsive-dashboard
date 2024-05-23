export interface ITaskProps {
  title: string;
  completed?: boolean;
}

export const tasks: ITaskProps[] = [
  { title: "Start Our Meeting", completed: true },
  { title: "Analyse Our Site", completed: true },
  { title: "Play Footbal", completed: false },
];
