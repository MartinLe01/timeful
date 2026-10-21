export type ModeType = 'pomodoro' | 'break';

export interface TaskItem {
  id: string;
  title: string;
  isActive: boolean;
}
