import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, DashboardOutlined } from '@ant-design/icons';
import { APP_ROUTER, APP_ROUTER_LABEL } from '../constants';
import './style.css';

const { Header, Sider, Content } = Layout;

const siderBarItems = [
    {
        path: APP_ROUTER.DASHBOARD,
        icon: <DashboardOutlined />,
        label: APP_ROUTER_LABEL.DASHBOARD,
    },
    {
        key: 'thong-ke',
        icon: <PieChartOutlined />,
        children: [
            { key: 'Thống kê đơn hàng', path: 'thong-ke-don-hang', label: 'Đơn hàng' },
            {
                key: 'Thống kê trạng thái đơn hàng',
                path: 'thong-ke-don-hang-theo-trang-thai',
                label: 'Trạng thái đơn hàng',
            },
            { key: 'Thống kê doanh thu', path: 'thong-ke-doanh-thu', label: 'Doanh thu' },
        ],
    },
];

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [siderBar, setSiderBar] = useState<any>(siderBarItems);

    const navigate = useNavigate();

    const handleClick = (data: any) => {
        const {
            item: {
                props: { path },
            },
        } = data;
        navigate(`/admin/${path}`);
    };

    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="sider-admin-bg "
                id="sider-admin"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Link to={'/'}>
                    <div className="flex items-center justify-center gap-4">
                        {/* <img src="/images/admin-logo.png" className="my-4 sm:h-16" alt="Dodoris Logo" /> */}
                        <p className="text-[#ffff] font-bold">Dodoris</p>
                    </div>
                </Link>
                <Menu
                    style={{ backgroundColor: '#17274e' }}
                    theme="dark"
                    className="menu-admin-bg "
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={siderBar}
                    onClick={handleClick}
                />
            </Sider>
            <Layout className="site-layout h-screen " style={{ overflow: 'initial', marginLeft: collapsed ? 80 : 200 }}>
                <Header
                    style={{
                        padding: 0,
                        backgroundColor: '#ffffff',
                        borderBottom: '1px solid #ccc',
                    }}
                >
                    <div className="flex justify-between items-center px-10">
                        <div>
                            {collapsed ? (
                                <span onClick={() => setCollapsed(!collapsed)} className="trigger">
                                    <MenuUnfoldOutlined className="cursor-pointer" style={{ fontSize: '20px' }} />
                                </span>
                            ) : (
                                <span onClick={() => setCollapsed(!collapsed)} className="trigger">
                                    <MenuFoldOutlined className="cursor-pointer" style={{ fontSize: '20px' }} />
                                </span>
                            )}
                        </div>
                        {/* <User layoutAdmin={true} /> */}
                    </div>
                </Header>
                <Content className="bg-white p-6">
                    <div className="site-layout-background">
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
