import React from 'react';

interface PageHeaderProps {
    title: string;
}

const PageHeader = ({
    title = '',
}: PageHeaderProps) => {

    return (
        <h2 className="text-4xl font-semibold mb-2">
            {title}
        </h2>
    );
};

export default PageHeader;
