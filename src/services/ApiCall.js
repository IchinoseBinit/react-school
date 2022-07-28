import {axios} from 'axios';

export async function getAllNews()  {
    try  {
        const response = await axios.get('/api/news');
        console.log('response  ', response)
        return response.data;
    } catch (ex) {
        console.log(ex.toString());
    }
}