const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PollListScreen from '../poll_list_screen';

describe('core.components.poll_list_screen', () => {
  it('should render without exploding', () => {
    expect(shallow(<PollListScreen />).length).to.equal(1);
  });
});
