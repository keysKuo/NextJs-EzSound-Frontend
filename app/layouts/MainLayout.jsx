"use client";
import classNames from 'classnames'
import React from 'react'
import { useContext } from 'react';

import { AuthContext } from '../context/AuthProvider';

export default function MainLayout({ children }) {
    const { showLoginModal } = useContext(AuthContext);

  return (
    <div className={classNames({
        "flex": true,
        "overflow-hidden max-h-[100dvh]": showLoginModal
    })}>
      {children}
    </div>
  )
}
