import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Works } from './components';

const App = () => {

    return (
        <BrowserRouter>
            <div className="relative z-0">
                {/* <StarsCanvas /> */}

                <Navbar />
                <Hero />
                <About />
                <Experience />
                <Works />
                <div className="relative z-0">
                    <Contact />
                  
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
