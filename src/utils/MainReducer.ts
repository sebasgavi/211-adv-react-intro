
export interface MainReducerState {
  count: number,
  name: string;
  age: number;
  hungry: boolean;
}

export const initialMainReducerState: MainReducerState = {
  count: 0,
  name: '',
  age: 18,
  hungry: true,
}

export type MainReducerAction = {
  type: 'increment'|'decrement'|'reset'|'eat'|'born';
} | {
  type: 'rename';
  name: string;
};

export function mainReducer(currentState: MainReducerState, action: MainReducerAction) {
  switch (action.type) {
    case 'increment':
      return {
        ...currentState,
        count: currentState.count + 1
      };
    case 'decrement':
      return {
        ...currentState,
        count: currentState.count - 1
      };
    case 'eat':
      return {
        ...currentState,
        hungry: false
      };
    case 'born':
      return {
        count: 0,
        name: '',
        age: 0,
        hungry: new Date().getDate() % 2 === 0 ? true : false,
      };
    case 'rename':
      return {
        ...currentState,
        name: action.name || '',
      }
    default:
      throw new Error();
  }
}
