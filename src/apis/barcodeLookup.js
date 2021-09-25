import axios from 'axios';

const key = 'jsn33hmo03rt5xvuykr5ne985a8w8v';

const barcodeLookup = axios.create({
  baseURL: 'https://api.barcodelookup.com/v3/products',
  params: {
    key: key,
  },
});

export default barcodeLookup;