import Ember from 'ember';
const { computed, observer } = Ember

export default Ember.Controller.extend({

  responseMessage: '',
  email: '',
  message: '',
  headerMessage: 'Contact',
  firstComputedProperty: Ember.computed.match('model.email', /^.+@.+\..+$/),
  secondComputedProperty: Ember.computed.match('model.message', /[^']{5,}?/),

  isValid:  Ember.computed.and('firstComputedProperty', 'secondComputedProperty'),
  isDisabled: Ember.computed.not('isValid')

});