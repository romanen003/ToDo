import React, { Component } from 'react';
import { func, string, bool } from 'prop-types';
import classNames from 'classnames';

import './layout.css';

export const MyLayout = ({children}) => (
    <div className={classNames('Layout')}>
        {children}
    </div>
);