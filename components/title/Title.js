import './title.css'

export default function Title({arriba, abajo}){
    return(
        <div className="title-container">
            <h2>{arriba}</h2>
            <h2>{abajo}</h2>
        </div>
    )
}