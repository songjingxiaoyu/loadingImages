
import Link from 'next/link'
import { useRouter } from 'next/router'
import {useState,useEffect} from 'react'
import Router from 'next/router'

const Register=()=>{
    const [msg,setMsg] = useState('')
    const router = useRouter()
    useEffect(()=>{
        setMsg()
    },[])


    async function handleSubmit(e) {
        e.preventDefault()
        if(msg) setMsg('')
        const body ={
            username:e.currentTarget.username.value,
            password:e.currentTarget.password.value,
            repassword:e.currentTarget.repassword.value
        }
        if(body.password !== body.repassword){
            // console.log('两次密码不一致')
            setMsg(`两次密码不一致`)
            return
        }

        // Router.push('/login')
        router.push('/login')

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
              <label>
                用户名:
                <input placeholder={'手机号/邮箱'} type="number" name="username" />
              </label><br/>
                <label>
                密码:
                <input placeholder={'请输入密码'} type="password" name="password" />
              </label><br/>
                <label>
                确认密码:
                <input placeholder={'请确认密码'} type="password" name="repassword" />
              </label><br/>
              <input type="submit" value="注册" />
            </form>
        </div>
    )
}
export default Register
// const [a, setA] = useState(1);
//     useEffect(() => {
//         setA(2)
//     },[])
//     const funca = (e) => {
//         setA(e)
//     }