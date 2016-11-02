const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Header from '../header';

describe('core.components.header', () => {
  it('should render without exploding', () => {
    expect(shallow(<Header />).length).to.equal(1);
  });
});
