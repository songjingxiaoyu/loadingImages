
// import Head from 'next/head'
import MyHeader from '../components/MyHeader'
import React from 'react'

function Header() {
    return(
        <>
            <MyHeader/>
            {/*<Head>*/}
            {/*    <title>nice！</title>*/}
            {/*    <meta charSet='utf-8'/>*/}
            {/*</Head>*/}
            <div>Header组件</div>
        </>
    )
}
export default Header