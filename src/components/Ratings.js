function Rating(props){

    const { children } = props

    const roundNumber = Number(Math.round(children))

    const emptyStarPath = "./empty_star.svg"
    const fillStarPath = "./fill_star.svg"

    console.log(roundNumber)

    return (
        <div className="rating">

            { roundNumber >= 1 ? <img src={fillStarPath}/> : <img src={emptyStarPath}/> }
            { roundNumber >= 2 ? <img src={fillStarPath}/> : <img src={emptyStarPath}/> }
            { roundNumber >= 3 ? <img src={fillStarPath}/> : <img src={emptyStarPath}/> }
            { roundNumber >= 4 ? <img src={fillStarPath}/> : <img src={emptyStarPath}/> }
            { roundNumber >= 5 ? <img src={fillStarPath}/> : <img src={emptyStarPath}/> }

        </div>
    )

}

export default Rating