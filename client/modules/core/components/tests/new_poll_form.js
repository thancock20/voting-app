const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import NewPollForm from '../new_poll_form';

describe('core.components.new_poll_form', () => {
  it('should render without exploding', () => {
    expect(shallow(<NewPollForm />).length).to.equal(1);
  });

  it('should call createPoll when button clicked', () => {
    const createPoll = spy();
    const el = shallow(<NewPollForm createPoll={createPoll} />);

    el.find('Input').first().simulate('change', {target: {value: 'Ice Cream Flavor'}});
    el.find('Textarea').first().simulate('change', {target: {value: 'Chocolate,Vanilla,Rocky Road'}});
    el.find('form').first().simulate('submit');
    const args = createPoll.args[0];

    expect(args.slice(0,2)).to.deep.equal([
      'Ice Cream Flavor', [ 'Chocolate', 'Vanilla', 'Rocky Road' ]
    ]);
  });
});
