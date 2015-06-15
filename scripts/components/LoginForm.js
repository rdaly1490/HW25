var React = require("react");
var LoginModel = require("../models/LoginModel");

module.exports = React.createClass({
	render: function() {
		return (
			<form onSubmit={this.loginSubmitted}>
				<label>Username</label><input ref="username" type="text"/>
				<label>Password</label><input ref="password" type="text"/>
				<label>Email</label><input ref="email" type="text"/>
				<button type="submit">Submit Comment!</button>
			</form>
		);
	},

	loginSubmitted: function(e) {
		e.preventDefault();
		var login = new LoginModel({
			username: this.refs.username.getDOMNode().value,
			password: this.refs.password.getDOMNode().value,
			email: this.refs.email.getDOMNode().value
		});

		// console.log(login);

		if(!login.isValid()) {
			console.log(login.validationError);
		}
		else {
			console.log("success");
		}

	}
});