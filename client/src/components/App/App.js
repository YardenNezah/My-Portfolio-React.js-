import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Container from '../Container/Container';
import Search from '../Container/Search';
import Resume from '../Container/Resume';
import Nav from '../Nav/Nav';
import Skills from '../Nav/Skills';
import Footer from '../Footer/Footer';
import Projects from '../Nav/Projects';
import About from '../Nav/About';

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
                    <About/>
                    <Projects/>
                    <Skills/>
                </Nav>
            </header>
            <Resume/>
            <div className="container">
                <br></br>
                <Container data={dataRes}/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
