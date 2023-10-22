import React, { useContext } from 'react'
import { context } from './conetxt';

export default function Five() {
    const value = useContext(context)
    return (
      <div>
        <p>five{' '+value as string}</p>
      </div>
    );
}
