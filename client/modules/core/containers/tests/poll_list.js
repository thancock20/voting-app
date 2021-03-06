const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../poll_list';

describe('core.containers.poll_list', () => {
  describe('composer', () => {

//    const Tracker = {nonreactive: cb => cb()};
//    const getCollections = (post) => {
//      const Collections = {
//        Posts: {findOne: stub()}
//      };
//      Collections.Posts.findOne.returns(post);
//      return Collections;
//    };

    it('should subscribe to polls', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});

      const polls = [ {_id: 'abc123'} ];
      const Collections = {Polls: {find: stub()}};
      Collections.Polls.find.returns({fetch: () => polls});

      const context = () => ({Meteor, Collections});
      const onData = spy();

      composer({context}, onData);
      const args = Meteor.subscribe.args[0];
      expect(args.slice(0, 1)).to.deep.equal([
        'polls'
      ]);
    });

    it('should pass data on to onData', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});

      const polls = [ {_id: 'abc123'} ];
      const Collections = {Polls: {find: stub()}};
      Collections.Polls.find.returns({fetch: () => polls});

      const context = () => ({Meteor, Collections});
      const onData = spy();

      composer({context}, onData);
      const args = onData.args[0];
      expect(args).to.deep.equal([
        null, {polls}
      ]);
    });
  });
});
