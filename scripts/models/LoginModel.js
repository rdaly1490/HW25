var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		username:"",
		password: "",
		email: ""
	},
	validate: function(attr) {
		if(!attr.email) {
			return "Enter an email address";
		}
		else if(attr.username !== "rob" && attr.password !== "pw") {
			return "That username/password combination doesn't exist";
		}
		else if(!attr.password) {
			return "Enter a password";
		}
		else if(!attr.username) {
			return "Enter a username";
		}
		else {
			return false;
		}
	}
})