import "./profile.css"
import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/sidebar/sidebar"
import Feed from "../../components/feed/feed"
import Rightbar from "../../components/rightbar/rightbar"


export default function Profile(){
    return(
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
        <div className="profileRightTop">

            <div className="profileCover">

            <img className="profileCoverImg"
             src="assets/photos/30.jpg"
              alt="" />
               <img className="profileUserImg"
             src="assets/photos/18.jpg"
              alt="" />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Lara</h4>
            <span className="profileInfoDesc">hello guys</span>
        </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <Rightbar Profile/>
            </div>
        </div>
        </div>
        </>
    )
}