import Ember from 'ember';
const { computed, observer } = Ember

export default Ember.Controller.extend({

  responseMessage: '',
  emailAddress: '',
  headerMessage: 'Comming Soon',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      var _that = this;
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email });

      // Part check everything is correct
      newInvitation.save();
      newInvitation.save().then(response => {
        _that.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
        _that.set('emailAddress', '');
      });
    }
  }

});
