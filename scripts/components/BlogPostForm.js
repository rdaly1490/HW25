var React = require("react");
var BlogPostModel = require("../models/BlogPostModel");

module.exports = React.createClass({
	render: function() {
		return (
			<div className="blogpost">
				<form onSubmit={this.postSubmitted}>
					<label>Title</label><input ref="title" type="text" placeholder="Title goes here" />
					<label>Body</label><input ref="body" type="text" placeholder="Body goes here" />
					<label>Category</label>
					<select ref="category" multiple={true}>
						<option value="none">None</option>
						<option value="Sports">Sports</option>
						<option value="Leisure">Leisure</option>
						<option value="Funny">Funny</option>
					</select>
					<label>Username</label><input ref="username" type="text" placeholder="Username" />
					<label>Password</label><input ref="password" type="text" placeholder="Password" />
					<button type="submit">Submit Blog Post!</button>
				</form>
			</div>
		);
	},

	postSubmitted: function(e){
		e.preventDefault();

		var select1 = this.refs.category.getDOMNode();
    	var selected1 = [];
    	for (var i = 0; i < select1.length; i++) {
       		if (select1.options[i].selected) selected1.push(select1.options[i].value);
    	}

		var post = new BlogPostModel({
			title: this.refs.title.getDOMNode().value,
			body: this.refs.body.getDOMNode().value,
			category: selected1,
			username: this.refs.username.getDOMNode().value,
			password:this.refs.password.getDOMNode().value
		});

		// console.log(post);

		if(!post.isValid()) {
			console.log(post.validationError);
		}
		else {
			console.log(post);
		}
	}

});