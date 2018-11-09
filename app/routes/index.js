import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('invitation');
  },
  actions: {
    saveInvitation(newInvitation) {
      let _that = this;
      debugger;
      newInvitation.save().then(response => {
        _that.controller.set('responseMessage', "We saved your email address with the following id: " + response.get('id'));
        _that.controller.set('email', '');
      });
    },
    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
