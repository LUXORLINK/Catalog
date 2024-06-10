import axios from 'axios'

export const getAllProducts = async () => {
	const resp = await axios('https://jsonplaceholder.typicode.com/users')
	console.log(resp.data)
	return resp.data
}