function SkillBadge(props)
{
    return (
        <p>

            <h3>These are my skills bro</h3>
            <ol>
            <li>My first skill is {props.skillone}</li>
            <li>My second skill is definitely not {props.skilltwo}</li>
            </ol>
        </p>
    )
}

export default SkillBadge