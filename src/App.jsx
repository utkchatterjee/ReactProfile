import ProfileCard from './ProfileCard.jsx'
import SkillBadge from './SkillBadge.jsx'
import LinksSection from './LinksSection.jsx'


function App() {
  return (
    <>
      <ProfileCard name="Utkarsh Chatterjee"/>
      <SkillBadge skillone="Sneezing with my eyes open" skilltwo="Taking wrong aim even at point blank range"/>
      <LinksSection git="https://github.com/utkchatterjee" linkedin="https://www.linkedin.com/in/utkarsh-chatterjee-5b47b3320/"/>
    </>
  )
}

export default App
