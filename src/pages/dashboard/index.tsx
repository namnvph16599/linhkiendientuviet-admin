import { Breadcrumb, Button } from 'antd';
import { memo } from 'react';

const DashBoard = memo(() => {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
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
