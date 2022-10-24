import React from 'react';
import Pages from '../../pages/Pages';
import Sidebars from '../Sidebars/Sidebars';

function Containers() {
    return (
        <div className="flex bg-[#e3e8ee]">
            <Sidebars />
            <Pages />
        </div>
    );
}

export default Containers;
