import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = function(url) {
  const [body, setBody] = useState(null);

  useEffect(() => {

    if (!url) {
      return;
    }
    axios.get(url)
      .then(res => {
        setBody(res.data);
      });

  }, [url]);

  return { body };
};

export default useAxios;

