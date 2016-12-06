import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from 'meteor/meteor';

const Polls = new Mongo.Collection('polls');

const Option = Class.create({
  name: 'Option',
  fields: {
    name: {
      type: String,
      immutable: true
    },
    votes: {
      type: Number
    }
  }
});

const Poll = Class.create({
  name: 'Poll',
  collection: Polls,
  fields: {
    _id: {
      type: String,
      immutable: true
    },
    question: {
      type: String,
      immutable: true
    },
    options: {
      type: [ Option ]
    },
    owner: {
      type: String,
      immutable: true
    },
    username: {
      type: String,
      transient: true
    },
    createdAt: {
      type: Date,
      default: () => new Date(),
      immutable: true
    },
    updatedAt: {
      type: Date,
      default: () => new Date()
    }
  },
  events: {
    afterInit(e) {
      const doc = e.currentTarget;
      doc.username = Boolean(doc.owner) && Meteor.users.findOne(doc.owner).username;
    },
    beforeRemove(e) {
      const doc = e.currentTarget;
      if (!doc.isOwner()) {
        throw new Meteor.Error('not-authorized');
      }
    }
  },
  methods: {
    create(inits) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }

      this.question = inits.question;
      this.options = inits.options;
      this.owner = Meteor.userId();
      this.save();
    },
    edit(updates) {
      if (!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }

      for (let key in updates) {
        if (updates.hasOwnProperty(key)) {
          this[key] = updates[key];
        }
      }

      this.updatedAt = new Date();
      this.save();
    },
    isOwner() {
      return this.owner === Meteor.userId();
    }
  }
});

if (Meteor.isServer) {
  Poll.unpublished = [];
}

export default Poll;
