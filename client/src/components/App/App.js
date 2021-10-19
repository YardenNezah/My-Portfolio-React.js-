import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Container from '../Container/Container';
import Search from '../Container/Search';
import Nav from '../Container/Nav';
import Resume from '../Container/Resume';




function App() {
  const [dataRes, setDataRes] = useState();

  const fetchData = async () => {
    try {
      await axios.get('http://localhost:8080/data').then(({ data }) => setDataRes(data.data));
    } catch (err) { console.log(err); }
  };

  useEffect(() => { fetchData(); });

  return (
    <div className="App">
      <header>        <Nav/>  </header>
      <Resume />
      <div className="container">
        <br></br>
        <Container data={dataRes}/>
      </div>
    </div>
  );
}

export default App;
