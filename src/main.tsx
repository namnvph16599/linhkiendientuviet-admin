import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import vi_VN from 'antd/locale/vi_VN';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

const resources = {
    en: {
        translation: {
            'Welcome to React': 'Welcome to React and react-i18next',
        },
    },
    vi: {
        translation: {
            'Welcome to React': 'Ngo Van Nam react-i18next',
        },
    },
};

i18next.init({
    resources,
    lng: 'vi',
    interpolation: { escapeValue: false }, // React already does escaping
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ConfigProvider locale={vi_VN}>
            <I18nextProvider i18n={i18next}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </I18nextProvider>
        </ConfigProvider>
    </React.StrictMode>,
);
