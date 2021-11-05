import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Container from '../Container/Container';
import Resume from '../Container/Resume';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

function App() {
    const [dataRes, setDataRes] = useState();

    const fetchData = async () => {
        try {
            await axios.get('http://localhost:8080/data').then(({data}) => setDataRes(data.data));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    });

    return (
        <div className="App">
            <header>
                <Nav>
                </Nav>
            </header>
            <Resume/>
            <div className="container">
                <Container data={dataRes}/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
