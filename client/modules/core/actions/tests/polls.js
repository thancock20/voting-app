const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../polls';

describe('core.actions.polls', () => {
  describe('deletePoll', () => {
    it('should call Meteor.call to delete the poll', () => {
      const Meteor = {call: spy()};

      actions.deletePoll({Meteor}, 'abc123');
      const args = Meteor.call.args[0];

      expect(args.slice(0, 2)).to.deep.equal([
        'polls.delete', 'abc123'
      ]);
    });
  });
});
