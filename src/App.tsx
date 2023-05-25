import { Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';
import './index.css';

import { DashBoard, PageNotFound } from './pages';
import AdminLayout from './layout';
import { APP_ROUTER } from './constants';

function App() {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<DashBoard />} />
                <Route path={APP_ROUTER.DASHBOARD} element={<DashBoard />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;
