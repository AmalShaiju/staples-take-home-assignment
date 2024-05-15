import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useUserListing from './custom-hooks/UseUserListing'
import { Result } from './api-models/models'
function App() {
    const [count, setCount] = useState(0);
    const data: { users: Result[], currentPage: number, next: () => void, prev: () => void } = useUserListing();

    return (
        <>
            <div className="container">
                <div className="row g-0 m-auto">
                    <div className="col-12 text-center pt-2">
                        <h1 className="fw-bold text-uppercase">Amal Shaiju</h1>
                        <p>Amalshaiju16@gmail.com | 2898230814</p>
                        <hr></hr>
                    </div>
                    <div className="col-6 text-start">
                        <h3 className="fw-semibold">Page NO: {data.currentPage}</h3>
                    </div>
                    <div className="col-6 text-end">
                        <button className="btn btn-outline-dark" disabled={data.currentPage === 1} onClick={data.prev}>Previous</button>
                        <button className="btn btn-dark ms-3" onClick={data.next}>Next</button>
                    </div>
                    <div className="col-12">
                        {
                            data.users.length == 0
                                ?(<div className="alert alert-danger">Something went wrong..</div>)
                                :<div className="row m-auto g-3">
                                {
                                    data.users.map((user) => {
                                        return (
                                            <div key={user.login.uuid} className="col-xl-3 col-lg-4 col-md-6 col-12">
                                                <UserTile user={user}></UserTile>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export function UserTile({ user }) {
    return (
        <>
            <div className="card p-0 d-flex flex-column" >
                <img className="card-img-top" src={user.picture.large}></img>
                <div className="card-body flex-grow-1">
                    <h5 className="card-title text-truncate text-center">{user.name.title} {user.name.first} {user.name.last}</h5>
                </div>
            </div>
        </>
    )
}

export default App
