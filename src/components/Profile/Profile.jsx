
import css from "./Profile.module.css"
export default function Profile({image,name,tag,location,stats:{followers,views,likes },}){
return(
    <div className={css.card}>
  <div className={css.discription}>
    <img className={css.img} src={image} alt={"${name}`s avatar"}/>
    <p className={css.name}>{name}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>
  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className={css.statsTitle}>Followers</span>
      <span clasName ={css.statsNumber}>{followers}</span>
    </li>
    <li>
      <span className={css.statsTitle}>Views</span>
      <span clasName ={css.statsNumber}>{views}</span>
    </li>
    <li>
      <span className={css.statsTitle}>Likes</span>
      <span clasName ={css.statsNumber}>{likes}</span>
    </li>
  </ul>
</div>
)
}