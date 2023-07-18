// The endpoint for working with fetch
const baseUrl = ' https://jsonplaceholder.typicode.com/posts';

// A helper function to demonstrate **consuming** the data from a server
function showData(serverData) {
	console.log('Array of Data', serverData);
}

// GET (Read) data from the server
function getData(url) {
	fetch(url)
		.then((response) => {
			if (response.ok) {
				console.log('🟢 Got data');
				return response.json();
			}
		})
		.then((data) => showData(data))
		.catch((error) => console.log('🔴', error.message));
}

// POST (create) data on a server
function postData(url) {
	fetch(url, {
		method: 'POST',
		body: JSON.stringify({
			title: 'Another new data',
			body: 'Hello world from new data',
			userId: 5,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((data) => showData(data));
}

// PUT (Update) data on the server
function putData(url, id) {
	fetch(`${url}/${id}`, {
		method: 'PUT',
		body: JSON.stringify({
			title: 'Just another data',
			body: 'We changed data from data',
			userId: 5,
			id: id,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((data) => showData(data));
}

// DELETE delete data from the server
function deleteData(url, id) {
	fetch(`${url}/${id}`, {
		method: 'DELETE',
	})
		.then((response) => {
			if (response.status === 200) {
				console.log('Deleted 😢');
				return response.json();
			}
		})
		.then((data) => showData(data))
		.catch((error) => console.log(error.message));
}


