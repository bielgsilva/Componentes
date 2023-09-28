import React from 'react';
import useUser from '../../../../hooks/useUser';

import './styles.css';


const Conteudo = () => {
    const { teste } = useUser()
    return (
        <div className="overlay flex-center-column ma">
            {teste}

        </div>
    );
};

export default Conteudo;