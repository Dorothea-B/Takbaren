import axios from 'axios';

const Axios = axios.create({
	timeout: 30000,
});

export default Axios;
