var React = require("react");
var BlogPostModel = require("../models/BlogPostModel");
var PostCollection = require("../collections/PostCollection");

module.exports = React.createClass({
	render: function() {

		var postElements = this.props.allPosts.map(function(postModel) {
			return (<div key={postModel.cid}>{postModel.get("title")} {postModel.get("body")} 
				{postModel.get("category")} {postModel.get("username")} {postModel.get("password")}</div>)
		});
		return (<div>{postElements}</div>)
	}

});