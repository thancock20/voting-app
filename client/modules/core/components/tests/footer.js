const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Footer from '../footer';

describe('core.components.footer', () => {
  it('should render without exploding', () => {
    expect(shallow(<Footer />).length).to.equal(1);
  });
});
