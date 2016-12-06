const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../poll_buttons';

describe('core.containers.poll_buttons', () => {
  describe('composer', () => {

//    const Tracker = {nonreactive: cb => cb()};
//    const getCollections = (post) => {
//      const Collections = {
//        Posts: {findOne: stub()}
//      };
//      Collections.Posts.findOne.returns(post);
//      return Collections;
//    };

    it('should pass data on to onData', () => {
      const Meteor = {user: stub()};
      Meteor.user.returns('Bob');
      const Collections = {};

      const context = () => ({Meteor, Collections});
      const onData = spy();

      const isLoggedIn = true;

      composer({context}, onData);
      expect(onData.args[0]).to.deep.equal([ null, {isLoggedIn} ]);
    });
  });

  describe('depsMapper', () => {
    it('should map vote to actions', () => {
      const actions = {
        polls: {
          vote: spy()
        }
      };

      const deps = depsMapper({}, actions);

      expect(deps.vote).to.equal(actions.polls.vote);
    });
  });
});
