function About({about, image="https://via.placeholder.com/215"}){
    return (
        <aside>
            <img src={image} placeholder={""} alt="blog logo"/>,
            <p>{about}</p>
        </aside>
        
    )
}
export default About