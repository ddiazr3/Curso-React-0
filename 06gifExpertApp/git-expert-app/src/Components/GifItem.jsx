export const GifItem = ({gif}) => {

    return (
        <div className="card">
            {/*{gif.title}*/}
            <img src={gif.url} alt={gif.title}/>
            <p>{gif.title}</p>
        </div>
    )

}
