var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		title:"",
		body: "",
		category: null,
		username: null,
		password:null
	},
	validate: function(attr) {
		if(!attr.title) {
			return "Enter a post title";
		}
		else if (!attr.body) {
			return "Enter a post body";
		}
		else if (attr.category.length === 0) {
			return "Enter a post category";
		}
		else if (attr.username !== "rob" && attr.password !=="pw") {
			return "That username/password combination doesn't exist";
		}
		else {
			return false;
		}
	}
});