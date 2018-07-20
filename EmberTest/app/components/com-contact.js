import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
	showErrors : false,
	validations: {
		name:{
			presence: { message: 'Please enter Name' }
		},
		email:{
			presence: { message: 'Please enter Email' },
			format: { with: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, allowBlank: true, message: 'Please enter proper email format'  }
		},
		subject:{
			presence: { message: 'Please enter Subject' },
			
		},
		message:{
			presence: { message: 'Please enter Message' }
		}
	},
	actions: {
		submitContact() {
			this.validate().then(()=>{
				this.set('isSubmitted', true);
			}).catch(()=>{
				this.set("showErrors", true);
			})
		}
	}
});
