import { Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';
import './index.css';

import { PageNotFound } from './pages';

function App() {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout />}></Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;
