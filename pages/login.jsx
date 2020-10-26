
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useState,useEffect} from 'react'


const Login=()=> {
    const [msg,setMsg] = useState('')
    const router = useRouter()
    useEffect((
        setMsg
    )=>{},[])

    const handleSubmit=(e)=> {
        e.preventDefault()
        if(msg) setMsg('')
        const body ={
            username:e.currentTarget.username.value,
            password:e.currentTarget.password.value,
        }
        router.push('/user')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
              <label>
                用户名:
                <input placeholder={'手机号/邮箱'} type="number" name="username"  />
              </label><br/>
                <label>
                密码:
                <input placeholder={'请输入密码'} type="password" name="password" />
              </label><br/>
              <input type="submit" value="登录" />
            </form>
        </>
        )
}
export default Login

