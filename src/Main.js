import {useState, useEffect} from "react"
import "./Main.css"

const Main = () => {

    const [contests, setcontests] = useState([]);

    useEffect(() => {
        fetch("https://codeforces.com/api/contest.list?gym=false")
        .then(response => {
            return response.json();
        })
        .then(data => {
            setcontests(data.result);
        })
        .catch((err) => {
            console.log(err);
        })
        
    })
    return (
        <div className = "allContests">
            <h1>
                Codeforces Contests
            </h1>
            <div >
                    {
                        contests.map(contest => (
                            <div  className = "indi">
                            {
                                <a href = {`http://codeforces.com/contest/${contest.id}/standings`}>
                                <button className = "rt">Standings</button>
                                </a>
                            }
                            <div>{contest.name}</div>
                            </div>
                            ))
                    }
            </div>
        </div>
    )
}

export default Main;