const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../log_in_buttons';

describe('accounts.containers.log_in_buttons', () => {
  describe('composer', () => {

//    const Tracker = {nonreactive: cb => cb()};
//    const getCollections = (post) => {
//      const Collections = {
//        Posts: {findOne: stub()}
//      };
//      Collections.Posts.findOne.returns(post);
//      return Collections;
//    };

    it('should pass Blaze on to onData', () => {
      const Blaze = 'BLAZE';
      const context = () => ({Blaze});
      const onData = spy();

      composer({context}, onData);
      const args = onData.args[0];
      expect(args).to.deep.equal([
        null, {Blaze}
      ]);
    });
  });
});
