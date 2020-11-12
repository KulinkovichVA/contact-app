import "./Contact.css"

export default function Contact(props){
  return(
    <div className = "Contact">
      <img src = {props.avatarUrl} className = "avatar" alt = "Avatar"></img>
      <div>
        <p className = "name">{props.name}</p>
        <div className = "status">
          <span className = {props.isOnline ? "status-online" : "status-offline"}></span>
          <span className = "status-text">{props.isOnline ? "Online" : "Offline"}</span>
        </div>
      </div>  
    </div>
  )
}