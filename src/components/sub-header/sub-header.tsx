import { memo } from 'react';
import { Link } from 'react-router-dom';

export const SubHeader = memo((props: { items: { title: string; to: string | null }[]; title?: string }) => {
    const { items = [], title = '' } = props;

    return (
        <div className="flex justify-between items-center bg-white px-6 h-[84px]">
            <div>
                {items.length > 0 &&
                    items.map((item, idx) => {
                        if (items.length - 1 === idx) {
                            return (
                                <div className="inline" key={idx}>
                                    {item.to ? (
                                        <Link to={item.to} className="text-xs hover:text-yellow text-grayscale-black">
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <span key={idx} className="text-xs  text-grayscale-black">
                                            {item.title}
                                        </span>
                                    )}
                                </div>
                            );
                        }
                        return (
                            <div className="inline" key={idx}>
                                {item.to ? (
                                    <Link to={item.to} className="text-xs hover:text-yellow text-grayscale-light">
                                        {item.title}
                                    </Link>
                                ) : (
                                    <span className="text-xs  text-grayscale-light">{item.title}</span>
                                )}
                                <span className="px-2 text-xs text-grayscale-light">/</span>
                            </div>
                        );
                    })}
                <h2 className="pt-2">{title || items[items.length - 1].title}</h2>
            </div>
        </div>
    );
});
