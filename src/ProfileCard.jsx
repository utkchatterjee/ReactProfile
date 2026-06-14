import myphoto from './assets/ME.jpg'

function ProfileCard(props){
  return(
    <div>
      <p>
      <img src={myphoto} alt="There is a problem, I feel."></img>
      <h2>{props.name}</h2>
      <ul>
      <li>This is my first characteristic</li>
      <li>This is my second characteristic</li>
      <li>This is a very personal detail about my childhood</li>
      </ul>
      </p>
    </div>
  )
}

export default ProfileCard