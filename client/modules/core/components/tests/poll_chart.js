const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PollChart from '../poll_chart';

describe('core.components.poll_chart', () => {
  it('should render without exploding', () => {
    expect(shallow(<PollChart />).length).to.equal(1);
  });
});
