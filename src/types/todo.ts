export type Todo = {
  id: string;
  title: string;
  createdAt: Date;
  completedAt: Date | null;
  description: string;
};
