
import * as React from 'react'
import Link from 'next/link'
import styles from './index.css'

const NavTabBar = () => {
    return (
        <>
            <div className={styles.wrap}>
                <Link  href="/" as="/"><a className={styles.home}>Home</a></Link>
                <Link  href="/bag" as="/bag"><a className={styles.bag}>bag</a></Link>
                <Link  href="/user" as="/user"><a className={styles.user}>User</a></Link>
            </div>
        </>
    )
}

export default NavTabBar
