console.log('Hello from External JS');
fetch('https://api.github.com/users/github')
	.then(res => res.json())
	.then(json => document.write(json.login + '<br>' + json.id))