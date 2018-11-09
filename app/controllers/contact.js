import Ember from 'ember';
const { computed, observer } = Ember

export default Ember.Controller.extend({

  responseMessage: '',
  emailAddress: '',
  message: '',
  headerMessage: 'Contact',
  firstComputedProperty: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  secondComputedProperty: Ember.computed.match('message', /[^']{5,}?/),

  isValid:  Ember.computed.and('firstComputedProperty', 'secondComputedProperty'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveContact() {
      var _that = this;
      const email = this.get('emailAddress');
      const message = this.get('message');
      const newContact = this.store.createRecord('contact', { email, message });

      // Part check everything is correct
      newContact.save();
      newContact.save().then(response => {
        _that.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
        _that.set('emailAddress', '');
      });
    }
  }

});