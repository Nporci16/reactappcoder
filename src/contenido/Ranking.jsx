const Ranking = (props) => {

    const {

        items,

    } = props;


    return (
        <div className="container col-md-6">
        <h3>Ranking Fifa</h3>
        {
        items.map( (elemento) => {
            return <li>{elemento}</li>
        })
        }
        </div>
    );
}

export default Ranking;