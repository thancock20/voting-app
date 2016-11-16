const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../poll';

describe('core.containers.poll', () => {
  describe('composer', () => {

//    const Tracker = {nonreactive: cb => cb()};
//    const getCollections = (post) => {
//      const Collections = {
//        Posts: {findOne: stub()}
//      };
//      Collections.Posts.findOne.returns(post);
//      return Collections;
//    };

    it('should call onData with no data', () => {
      const Meteor = {};
      const Collections = {};

      const context = () => ({Meteor, Collections});
      const onData = spy();

      composer({context}, onData);
      expect(onData.args[0]).to.deep.equal([ null, {} ]);
    });
  });

  describe('depsMapper', () => {
    it('should map deletePoll to actions', () => {
      const actions = {
        polls: {
          deletePoll: spy()
        }
      };

      const deps = depsMapper({}, actions);

      expect(deps.deletePoll).to.equal(actions.polls.deletePoll);
    });
  });
});
