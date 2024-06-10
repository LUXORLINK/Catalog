import axios from 'axios'
export const getAllProducts = async () => {
    const resp = await axios('https://jsonplaceholder.typicode.com/photos')
    console.log(resp.data)
    return resp.data
}
export default getAllProducts