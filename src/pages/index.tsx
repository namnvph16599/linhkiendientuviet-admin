import { Suspense, lazy } from 'react';
import { ProgressLoading } from '../components';

const LazyLayout = (importStatement: () => Promise<any>) => {
    const Component = lazy(importStatement);

    return (
        <Suspense fallback={<ProgressLoading />}>
            <Component />
        </Suspense>
    );
};

export const DashBoard = () => LazyLayout(() => import('./dashboard'));
export const PageNotFound = () => LazyLayout(() => import('./not-page'));
export const Product = () => LazyLayout(() => import('./products'));
