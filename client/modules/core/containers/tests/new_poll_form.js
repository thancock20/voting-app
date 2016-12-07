const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../new_poll_form';

describe('core.containers.new_poll_form', () => {
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
    it('should map createPoll to actions', () => {
      const actions = {
        polls: {
          createPoll: spy()
        }
      };

      const deps = depsMapper({}, actions);

      expect(deps.createPoll).to.equal(actions.polls.createPoll);
    });
  });
});
