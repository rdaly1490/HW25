var React = require("react");
var CommentForm = require("./components/CommentForm");
var CommentList = require("./components/CommentList");
var CommentCollection = require("./collections/CommentCollection");
var comments = new CommentCollection([{text:"orange", createdAt: new Date()},{text:"green", createdAt: new Date()}]);
var BlogPostForm = require("./components/BlogPostForm");

React.render(
	<div>
		<BlogPostForm />
		<CommentForm />
		<CommentList allComments={comments} />
	</div>,
	document.getElementById("container")
);  