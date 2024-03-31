import css from "./FriendListItem.module.css"
import clsx from "clsx";



export default function FriendListItem({ friend: { name, avatar, isOnline } }){
return(
    <div className={css.card}>
  <img className={css.img} src={avatar} alt="Avatar" width="60" />
  <p className={css.title}>{name}</p>
  <p className={clsx(css.text, isOnline ? css.isOnline : css.isOffline)}>{isOnline ? "Online" : "Offline" }</p>
</div>
)
}