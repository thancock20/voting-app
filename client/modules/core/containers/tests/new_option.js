const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../new_option';

describe('core.containers.new_option', () => {
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
    it('should map addOption to actions', () => {
      const actions = {
        polls: {
          addOption: spy()
        }
      };

      const deps = depsMapper({}, actions);

      expect(deps.addOption).to.equal(actions.polls.addOption);
    });
  });
});
