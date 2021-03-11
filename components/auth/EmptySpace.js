import { useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';
import LoginGoogle from './LoginGoogle'

const EmptySpace = () => {
    return (
        <div style={{height: '30rem', backgroundColor: 'darksalmon'}}>
        </div>
    );
};

export default EmptySpace;