import { useCallback, useState } from 'react';
import { DashboardOutlined, PieChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { APP_ROUTER, APP_ROUTER_LABEL } from '../constants';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './style.css';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: APP_ROUTER.DASHBOARD,
        icon: <DashboardOutlined />,
        label: APP_ROUTER_LABEL.DASHBOARD,
    },
    {
        key: APP_ROUTER.PRODUCT.LIST + 'products',
        label: APP_ROUTER_LABEL.PRODUCT.DEFAULT,
        icon: <PieChartOutlined />,
        children: [
            { key: APP_ROUTER.PRODUCT.LIST, label: APP_ROUTER_LABEL.PRODUCT.LIST },
            {
                key: APP_ROUTER.PRODUCT.CREATE,
                label: APP_ROUTER_LABEL.PRODUCT.CREATE,
            },
        ],
    },
];

const AdminLayout: React.FC = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const handleNavigate = useCallback(
        (value: any) => {
            const { key } = value;
            navigate(key);
        },
        [navigate],
    );

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Link to="/">
                    <img
                        src={!collapsed ? '/public/images/logo.jpg' : '/public/images/logo-icon.jpg'}
                        alt="Linh kiện điện tử - Việt"
                        className={'p-4'}
                    />
                </Link>
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleNavigate} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: '#FFFFFF' }}>header</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
