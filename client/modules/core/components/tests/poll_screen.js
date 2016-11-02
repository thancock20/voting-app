const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PollScreen from '../poll_screen';

describe('core.components.poll_screen', () => {
  it('should render without exploding', () => {
    expect(shallow(<PollScreen />).length).to.equal(1);
  });
});
