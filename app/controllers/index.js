import Ember from 'ember';
const { computed, observer } = Ember

export default Ember.Controller.extend({

  responseMessage: '',
  email: '',
  headerMessage: 'Comming Soon',

  isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  

});
