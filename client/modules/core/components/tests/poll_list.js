const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PollList from '../poll_list';

describe('core.components.poll_list', () => {
  it('should render without exploding', () => {
    expect(shallow(<PollList polls={[]} />).length).to.equal(1);
  });
});
