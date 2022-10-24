import Containers from './components/Containers/Containers';
import Footers from './components/Footers/Footers';
import Headers from './components/Headers/Headers';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Headers />
                <Containers />
                <Footers />
            </BrowserRouter>
        </div>
    );
}

export default App;
