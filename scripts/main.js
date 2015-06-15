var React = require("react");
var CommentForm = require("./components/CommentForm");
var CommentList = require("./components/CommentList");
var CommentCollection = require("./collections/CommentCollection");
var comments = new CommentCollection([{text:"orange", createdAt: new Date()},{text:"green", createdAt: new Date()}]);
var BlogPostForm = require("./components/BlogPostForm");
var PostList= require("./components/PostList");
var PostCollection = require("./collections/PostCollection");
var posts = new PostCollection([{title:"hello", body:"world", category:"Sports", username:"rob", password:"pw"}, {title:"hola", body:"mundo", category:"Leisure", username:"roberto", password:"pw"}]);
var LoginForm = require("./components/LoginForm");

React.render(
	<div>
		<LoginForm />
		<BlogPostForm />
		<PostList allPosts={posts} />
		<CommentForm />
		<CommentList allComments={comments} />
	</div>,
	document.getElementById("container")
);  