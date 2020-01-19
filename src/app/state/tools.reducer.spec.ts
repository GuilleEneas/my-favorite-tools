import { reducer, initialState } from './tools.reducer';
import { Tool } from '../models/tool.type';
import { sortTools } from './sort-tools.actions';

describe('Tools Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });

    it('should sort tools for sortTools action', () => {
      const state: Tool[] = [
        { name: 'test tool 1', rating: 0 },
        { name: 'test tool 2', rating: 1 }
      ];
      const action = sortTools();
      const sortedState = [
        { name: 'test tool 2', rating: 1 },
        { name: 'test tool 1', rating: 0 }
      ];

      const result = reducer(state, action);

      expect(result).toEqual(sortedState);
    });
  });
});
