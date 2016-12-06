import {Polls} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import getUnpublishedFields from '/lib/get_unpublished_fields';

export default function () {
  Meteor.publishComposite('polls', {
    find() {
      return Polls.find({}, getUnpublishedFields(Polls));
    },
    children: [
      {
        find(doc) {
          return Meteor.users.find(
            { _id: doc.owner },
            { limit: 1, fields: { username: 1 } }
          );
        }
      }
    ]
  });
}
