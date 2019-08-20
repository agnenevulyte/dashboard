import React from 'react'
import Square from '../Square'
import './styles.css'

export default function SquaresContainer() {
    return (
        <div>
            <div className="mainSquare">
                <Square name="users" paragraph={"sajfdhfks jkhfdhjhdskjd sdhfkjs"}/>
                <Square name="trades" paragraph={"sajfdhfks 22222222222sdd sdhfkjs"}  />
                <Square name="settlements" paragraph={"pppppppppp jkhfdhjhdskjd sdhfkjs"} />
            </div>
        </div>
    )
}
