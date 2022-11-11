import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {/* ) : (
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            )} */}
        </div>
    );
}

export default App;
