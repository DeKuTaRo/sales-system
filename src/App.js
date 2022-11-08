import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';

function App() {
    // const navigate = useNavigate();

    // const checkToken = localStorage.getItem('token');

    // if (!checkToken) {
    //     navigate('/login');
    // } else {
    //     navigate('/');
    // }
    // stay on this route since the user is authenticated

    return (
        <div className="App">
            {/* {checkToken ? ( */}
            <BrowserRouter>
                <Pages />
            </BrowserRouter>
            {/* ) : (
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            )} */}
        </div>
    );
}

export default App;
