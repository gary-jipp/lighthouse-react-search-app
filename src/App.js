import { useState } from 'react';
import Input from 'components/Input';
import SearchList from 'components/SearchList';
import 'App.css';
const BASEURL = 'https://hn.algolia.com/api/v1/search?query=';

export default function App() {
  const [url, setUrl] = useState();

  const onSubmit = function(input) {
    setUrl(BASEURL + input);
  };

  return (
    <div className="App">
      <h1>Search Page</h1>
      <Input label='Search' onSubmit={onSubmit} />
      <SearchList url={url} />
    </div>
  );
}