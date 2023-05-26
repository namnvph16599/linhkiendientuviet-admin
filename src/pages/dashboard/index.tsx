import { memo } from 'react';
import { Breadcrumb, Button } from 'antd';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const DashBoard = memo(() => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <h1>{t('Welcome to React')}</h1>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <button onClick={() => i18n.changeLanguage('vi')}>vi</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
            <div style={{ padding: 24, minHeight: 360 }}>
                <Button type="primary">Primary Button</Button>
                <Button type="primary" disabled>
                    Primary Button disabled
                </Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </div>
        </div>
    );
});

export default DashBoard;
