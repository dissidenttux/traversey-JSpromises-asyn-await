const posts = [
	{ title: 'Post One', body: 'This is the post one' },
	{ title: 'Post Two', body: 'This is the post two' }
];

function getPosts() {
	setTimeout(() => {
		let output = '';
		posts.forEach((post, index) => {
			// "${}" is a template literal, it allows you to put JavaScript directly as a String
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;		
	}, 1000);
}

function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
