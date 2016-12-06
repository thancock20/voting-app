const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Home from '../home';

describe('core.components.home', () => {
  it('should render without exploding', () => {
    expect(shallow(<Home />).length).to.equal(1);
  });
});
