const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Poll from '../poll';

describe('core.components.poll', () => {
  it('should render without exploding', () => {
    expect(shallow(<Poll />).length).to.equal(1);
  });
});
