import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
      // by default it will return an empty array
      const action = { type: 'UNKNOWN_ACTION', payload: 'new comment' };
      expect(commentReducer([], action)).to.eql([]);
    });

    it('handles action of type SAVE_COMMENT', () => {
      const action = { type: SAVE_COMMENT, payload: 'new comment' };
      expect(commentReducer([], action)).to.eql(['new comment']);
    });
});