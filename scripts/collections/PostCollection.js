var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var BlogPostModel = require("../models/BlogPostModel.js");

module.exports = Backbone.Collection.extend({
	model: BlogPostModel
});