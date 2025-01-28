import { useEffect, useState } from "react";
import "./widgetSm.css";
import { userRequest } from "../../requestMethods";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    const getUsers = async()=>{
      try{

        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      }catch{
        console.log("ERROR IS DETECTED");
      }
    }
    getUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map(user=>(

          <li className="widgetSmListItem"key={user._id}>
          <img
            src={user.img ||"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1280px-User_icon_2.svg.png"}
            alt=""
            className="widgetSmImg"
            />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
          ))}
       
      </ul>
    </div>
  );
}
