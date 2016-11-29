const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../poll_list_screen';

describe('core.containers.poll_list_screen', () => {
  describe('composer', () => {

//    const Tracker = {nonreactive: cb => cb()};
//    const getCollections = (post) => {
//      const Collections = {
//        Posts: {findOne: stub()}
//      };
//      Collections.Posts.findOne.returns(post);
//      return Collections;
//    };

    it('should call OnData with no data', () => {
      const Meteor = {};
      const Collections = {};

      const context = () => ({Meteor, Collections});
      const onData = spy();

      composer({context}, onData);
      expect(onData.args[0]).to.deep.equal([ null, {} ]);
    });
  });

  describe('depsMapper', () => {
    it('should map newPoll to actions', () => {
      const actions = {
        polls: {
          newPoll: spy()
        }
      };

      const deps = depsMapper({}, actions);

      expect(deps.newPoll).to.equal(actions.polls.newPoll);
    });
  });
});
