import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Next() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
        <span>⚡ Nextron ⚡</span>
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
      </div>
    </React.Fragment>
  )
}

export default Next