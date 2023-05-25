import { useLayoutEffect } from 'react';
import nprogress from 'nprogress';

export const ProgressLoading = () => {
    useLayoutEffect(() => {
        nprogress.start();

        return () => {
            nprogress.done();
        };
    }, []);
    return null;
};
