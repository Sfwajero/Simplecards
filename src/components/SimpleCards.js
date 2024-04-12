const Simplecards = (props) => {
    return ( 
        
            <div className="card text-black bg-warning m-5">
                <img className="card-img-top" src="holder.js/100px180/" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{props.iname}</h4>
                    <p className="card-text">{props.til}</p>
                    <p className="card-text">{props.id}</p>
                    <p className="card-text">{props.age}</p>
                </div>
            </div>
    

     );

    }

 
export default Simplecards;