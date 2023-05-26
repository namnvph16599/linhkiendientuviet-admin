import { Breadcrumb, Button } from 'antd';
import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/app';
import { increment } from '../../slices/count';

const DashBoard = memo(() => {
    const count = useAppSelector((state) => state.count.value);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(increment());
    };

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

            <Button type="primary" onClick={handleClick}>
                +
            </Button>
            {count}
        </div>
    );
});

export default DashBoard;
