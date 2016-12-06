const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../polls';

describe('core.actions.polls', () => {
  describe('vote', () => {
    it('should call Meteor.call to add a vote to the option', () => {
      const Meteor = {call: spy(), subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});

      const poll = {
        _id: 'abc123',
        question: 'Ice Cream Flavor',
        options: [
          {
            name: 'Chocolate',
            votes: 0
          },
          {
            name: 'Vanilla',
            votes: 0
          },
          {
            name: 'Rocky Road',
            votes: 0
          }
        ]
      };
      const Collections = {Polls: {findOne: stub()}};
      Collections.Polls.findOne.returns(poll);

      actions.vote({Meteor, Collections}, 'abc123', 'Chocolate');
      const args = Meteor.call.args[0];

      expect(args.slice(0, 3)).to.deep.equal([
        'polls.edit',
        'abc123',
        {options: [
          {
            name: 'Chocolate',
            votes: 1
          },
          {
            name: 'Vanilla',
            votes: 0
          },
          {
            name: 'Rocky Road',
            votes: 0
          }
        ]}
      ]);
    });
  });

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
