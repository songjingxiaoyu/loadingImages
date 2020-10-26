
import Link from 'next/link'
import Router from 'next/router'
var isLogin = false
const User=()=> {

  function out() {
      Router.push('/')
  }
  function goHome() {
      Router.push('/home')
  }
  function login() {
      Router.push('/login')
      isLogin = true
  }
  return (
      <>
        <div>User</div>
          { isLogin?(
              <div>
                  <div><button onClick={out}>退出</button></div>
                  <div><button onClick={goHome}>去Home</button></div>
              </div>
          ):(
              <div><button onClick={login}>SIGN IN / REGISTER</button></div>
          )
          }
      </>
  )
}

export default User