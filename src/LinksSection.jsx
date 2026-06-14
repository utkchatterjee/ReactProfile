function LinksSection(props)
{
    return (
        <>
            <h4>These are some useful links to get to know me :</h4>
            <ul>
                <li><a href={props.git}>Github profile link.</a></li>
                <li><a href={props.linkedin}>LinkedIn</a></li>
            </ul>
        </>
    )
}

export default LinksSection