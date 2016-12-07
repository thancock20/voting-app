const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../polls';

describe('core.actions.polls', () => {
  describe('createPoll', () => {
    it('should call Meteor.call to create a poll', () => {
      const Meteor = {call: spy()};
      const question = 'Ice Cream Flavor';
      const options = [ 'Chocolate', 'Vanilla', 'Rocky Road' ];

      actions.createPoll({Meteor}, question, options);
      const args = Meteor.call.args[0];

      expect(args.slice(0,2)).to.deep.equal([
        'polls.create',
        {
          question: 'Ice Cream Flavor',
          options: [
            {
              name: 'Chocolate'
            },
            {
              name: 'Vanilla'
            },
            {
              name: 'Rocky Road'
            }
          ]
        }
      ]);
    });
  });
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

  describe('addOption', () => {
    it('should call Meteor.call to add an option to the poll', () => {
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

      actions.addOption({Meteor, Collections}, 'abc123', 'Neapolitan');
      const args = Meteor.call.args[0];

      expect(args.slice(0, 3)).to.deep.equal([
        'polls.edit',
        'abc123',
        {options: [
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
          },
          {
            name: 'Neapolitan',
            votes: 1
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
