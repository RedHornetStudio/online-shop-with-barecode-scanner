import axios from 'axios';

const key = 'fdum2els10plhqcm0w7gan2yx88hhd';

const barcodeLookup = axios.create({
  baseURL: 'https://api.barcodelookup.com/v3/products',
  params: {
    key: key,
  },
});

export default barcodeLookup;