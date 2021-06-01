import React from 'react'
import './NavBar.css'
import Logo from '../../images/logo.png'

function Navbar() {
    return (
        <div className="top">
            <div className="nav_left">
                <div className="nav_logo">
                <a href="#/"> 
                  <img src={Logo}  style={{width:110 , height:100}}alt="logo"/>
                   </a> 
 </div>
                   <ul className="nav__lists"> 
                   <li className="nav__list"> 
                   <h4>TRENDING</h4>
                    </li> <li className="nav__list"> <h4>VIDEOS</h4> </li> <li  className="nav__list">
                     <h4>STORIES</h4>
                     </li> <li className="nav__list "> <h3 >QUIZZES</h3> </li>
                      <li className="nav__list"> <h4>MEMES</h4> </li> <li className="nav__list"> 
                      <h4>SPOTLIGHT</h4> 
                      </li> </ul>
            </div>
            <div className="nav__right"> 
             <ul className="nav__lists"> <li className="nav__list"> 
            <button className="bookmark nav-bookmark" aria-label="bookmark" onclick="if (!window.__cfRLUnblockHandlers) return false; userBookmark();"> 
            <svg className="not-marked" width="12" height="17" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 16.2L6 13.45l5.5 2.75V1.57C11.5.704 10.796 0 9.929 0H2.07C1.204 0 .5.704.5 1.571V16.2zM6 11.693l-3.929 1.964V1.571H9.93v12.086L6 11.693z" fill="#FF9B04">
                    </path></svg> <svg class="marked" width="12" height="17" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" clip-rule="evenodd" viewBox="0 0 12 17"><path fill="#1b91ff" d="M-.013 17.016l6-2.887 6 2.887V1.665c0-.91-.767-1.65-1.714-1.65H1.7c-.946 0-1.714.74-1.714 1.65v15.35z"></path></svg> </button> </li> <li class="nav__list"> <button class="nav-user" id="userProfilePage" aria-label="user login" onclick="if (!window.__cfRLUnblockHandlers) return false; userPop();"> <svg width="18" height="16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.6 1.524c-1.85 0-3.35 1.523-3.35 3.403 0 1.88 1.5 3.403 3.35 3.403s3.35-1.523 3.35-3.403c0-1.88-1.5-3.403-3.35-3.403zM3.75 4.927C3.75 2.206 5.921 0 8.6 0s4.85 2.206 4.85 4.927c0 2.721-2.171 4.927-4.85 4.927S3.75 7.648 3.75 4.927z" fill="#FF9B04"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 14.877c0-3.307 3.134-5.988 7-5.988s7 2.68 7 5.988c0 0-3.134 1.123-7 1.123s-7-1.123-7-1.123zm12.325-1.093c-.583-1.813-2.578-3.371-5.325-3.371-2.747 0-4.742 1.558-5.325 3.371a21.746 21.746 0 0 0 5.325.692 21.747 21.747 0 0 0 5.325-.692z" fill="#FF9B04"></path></svg> </button>
                         </li> <li className="nav__list"> <button className="nav-search" aria-label="search" onclick="if (!window.__cfRLUnblockHandlers) return false; searchOpen(true);"> <svg width="17" height="16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.995 12.99a6.495 6.495 0 1 1 5.131-2.512l4.374 4.374L15.352 16l-4.374-4.374a6.467 6.467 0 0 1-3.983 1.364zm4.872-6.495a4.871 4.871 0 1 1-9.743 0 4.871 4.871 0 0 1 9.742 0z" fill="#FF9B04"></path></svg> </button> </li> 
                         <li className="nav__list"> <button aria-label="all menu" onclick="if (!window.__cfRLUnblockHandlers) return false; menuOpen(true)"> 
                         <svg width="21" height="14" fill="none"><path fill="#FF9B04" d="M.5 0h20v1.481H.5zM.5 5.926h20v1.481H.5zM.5 11.852h20v1.481H.5z"></path></svg> 
            </button> </li> </ul>  </div>
        </div>
    )
}

export default Navbar
