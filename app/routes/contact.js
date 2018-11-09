import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact');
  },
  actions: {

    saveContact(newContact) {
      let _that = this;
      newContact.save().then(response => {
        _that.controller.set('responseMessage', "We saved your email address with the following id: " + response.get('id'));
        _that.controller.set('emailAddress', '');
      });
    },
    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
