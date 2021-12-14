import { useState } from 'react';
import useAxios from 'hooks/useAxios';

const SearchList = function(props) {
  const { body } = useAxios(props.url);

  const results = body ? body.hits : [];
  const list = results.map(item => {
    return <li key={item.objectID}><a href={item.url}>{item.title}</a></li>;
  });

  return (
    <ul>
      {list}
    </ul>
  );
};

export default SearchList;