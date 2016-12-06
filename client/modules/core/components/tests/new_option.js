const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import NewOption from '../new_option';

describe('core.components.new_option', () => {
  it('should render without exploding', () => {
    expect(shallow(<NewOption />).length).to.equal(1);
  });

  it('should call addOption when button clicked', () => {
    const addOption = spy();
    const pollId = 'abc123';
    const el = shallow(<NewOption pollId={pollId} addOption={addOption} />);

    el.find('InlineForm').first().simulate('click');
    const args = addOption.args[0];

    expect(args.slice(0,2)).to.deep.equal([
      'abc123', ''
    ]);
  });
});
