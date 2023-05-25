import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    ContactsOutlined,
    FileDoneOutlined,
    HomeOutlined,
    UsergroupDeleteOutlined,
    ProfileOutlined,
    ShopOutlined,
    IdcardOutlined,
    PictureOutlined,
    DashboardOutlined,
} from '@ant-design/icons';
import './admin-layout.css';
import _ from 'lodash';

const { Header, Sider, Content } = Layout;

const siderBarItems = [
    {
        path: '',
        icon: <DashboardOutlined />,
        label: 'Dashboard',
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
    {
        key: 'Quản lý đơn hàng',
        icon: <ProfileOutlined />,
        children: [
            { key: 'Đơn hàng', path: 'don-hang', label: 'Đơn hàng' },
            { key: 'Thêm đơn hàng', path: 'them-don-hang', label: 'Thêm đơn hàng' },
        ],
    },
    {
        path: 'quan-ly-vat-tu',
        icon: <FileDoneOutlined />,
        label: 'Quản Lý Vật Tư',
    },
    {
        path: 'quan-ly-banner',
        icon: <PictureOutlined />,
        label: 'Quản Lý Banner',
    },
    {
        key: 'Quản lý vai trò',
        icon: <ContactsOutlined />,
        children: [
            { key: 'Vai trò', path: 'quan-ly-vai-tro', label: 'Vai trò' },
            { key: 'Quyền', path: 'quan-ly-quyen', label: 'Quản lý quyền' },
        ],
    },
    {
        path: 'quan-ly-tai-khoan',
        icon: <IdcardOutlined />,
        label: 'Quản Lý Thành Viên',
    },
    {
        icon: <FileDoneOutlined />,
        children: [
            { key: 'Danh sách dịch vụ', path: 'quan-ly-dich-vu', label: 'Danh sách dịch vụ' },
            { key: 'Thêm dịch vụ', path: 'them-dich-vu', code: PERMISSION_TYPE.CREATE, label: 'Thêm dịch vụ' },
        ],
    },
    {
        label: 'Quản Lý Dịch Vụ Phát Sinh',
        icon: <ProfileOutlined />,
        children: [
            { key: 'Danh sách dịch vụ phát sinh', path: 'quan-ly-sub-dich-vu', label: 'Danh sách dịch vụ phát sinh' },
            {
                key: 'Thêm dịch vụ phát sinh',
                path: 'them-sub-dich-vu',
                code: PERMISSION_TYPE.CREATE,
                label: 'Thêm dịch vụ dịch vụ',
            },
        ],
    },
    {
        label: 'Quản Lý Cửa Hàng',
        icon: <HomeOutlined />,
        children: [
            { key: 'Cửa hàng', path: 'quan-ly-cua-hang', code: PERMISSION_TYPE.SHOW, label: 'Cửa hàng' },
            { key: 'Thêm cửa hàng', path: 'them-cua-hang', code: PERMISSION_TYPE.CREATE, label: 'Thêm cửa hàng' },
        ],
    },
    {
        path: 'quan-ly-kho',
        icon: <FileDoneOutlined />,
        label: 'Quản Lý Kho',
    },
    {
        path: 'province',
        icon: <ShopOutlined />,
        label: 'Quản Lý Địa Chỉ',
    },
    {
        key: 'Quản lý tin tức',
        path: 'quan-ly-tin-tuc',
        icon: <FileDoneOutlined />,
    },
    {
        key: 'Quản người dùng',
        path: 'quan-ly-nguoi-dung',
        icon: <UsergroupDeleteOutlined />,
    },
];

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [siderBar, setSiderBar] = useState([]);

    const navigate = useNavigate();

    const handleClick = ({
        item: {
            props: { path },
        },
        key,
    }) => {
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
                        <img src="/images/admin-logo.png" className="my-4 sm:h-16" alt="Dodoris Logo" />
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
