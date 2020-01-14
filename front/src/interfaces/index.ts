import { CombinedState } from "redux";

// ヘッダーで使うnavList
export interface NavList {
  name: string;
  to: string;
}

// Todoオブジェクト
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// rootState
export type RootState = CombinedState<{ todos: Todo[], load: boolean; }>
