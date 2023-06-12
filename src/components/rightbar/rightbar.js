import './rightbar.css'
import {Users} from "../../dummyData"; 
import Online from '../online/online';
  


export default function Rightbar({profile}) {
    
  const HomeRightbar=()=>{
return(
<>
<div className='birthdayContainer'>
          <img className='birthdayImg' src="/assets/gift.png" alt='hello'/>
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
            </span>
        </div>
        <img className='rightbarAd' src='/assets/person/pexels-roman-odintsov-4555321.jpg' alt=''/>
        <h4 className='rightbarTitle'>Online friends</h4>
        <ul className='rightbarFriendList'>
         
         {Users.map(u=>( <Online key={u.id} user={u}/>))}

        </ul>
</>
)
  };

  const ProfileRightbar = () =>{
    return(
       <>
       <h4 className='rightbarTitle'>Information</h4>
       <div className='rightbarInfo'>
       <div className='rightbarInfoItem'>
         <span className='rightbarInfoKey'>City:</span>
         <span className='rightbarInfoValue'>Chennai</span>
       </div>

       <div className='rightbarInfoItem'>
         <span className='rightbarInfoKey'>From:</span>
         <span className='rightbarInfoValue'>Tamil Nadu</span>
       </div>

       <div className='rightbarInfoItem'>
         <span className='rightbarInfoKey'>Relationship:</span>
         <span className='rightbarInfoValue'>Single</span>
       </div>
       </div>
       <h4 className='rightbarTitle'>User Friends </h4>
       <div className='rightbarFollowings'>
       <div className='rightbarFollowing'>
        <img className='rightbarFollowingImg' src='assets/photos/18.jpg' alt=''/>
       <span className='rightbarFollowingName'>Oliviya</span>
       </div>
       <div className='rightbarFollowing'>
        <img className='rightbarFollowingImg' src='assets/photos/1.jpg' alt=''/>
       <span className='rightbarFollowingName'>Oliviya</span>
       </div>
       <div className='rightbarFollowing'>
        <img className='rightbarFollowingImg' src='assets/photos/2.jpg' alt=''/>
       <span className='rightbarFollowingName'>Oliviya</span>
       </div>
       <div className='rightbarFollowing'>
        <img className='rightbarFollowingImg' src='assets/photos/3.jpg' alt=''/>
       <span className='rightbarFollowingName'>Oliviya</span>
       </div>
       <div className='rightbarFollowing'>
        <img className='rightbarFollowingImg' src='assets/photos/4.jpg' alt=''/>
       <span className='rightbarFollowingName'>Oliviya</span>
       </div>
       <div className='rightbarFollowing'>
        <img className='rightbarFollowingImg' src='assets/photos/5.jpg' alt=''/>
       <span className='rightbarFollowingName'>Oliviya</span>
       </div>

       </div>

       </>
      
    )
  };

  return (
  <div className='rightbar'>
      <div className='rightbarWrapper'>
      {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
  </div>
  
    );
    }
  
  