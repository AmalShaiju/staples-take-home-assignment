import { useEffect, useState } from "react";
import { Result, UsersGetResponse } from "../api-models/models";
import { UserRepository } from "../api-services/UserService";

export default function useUserListing(): { users: Result[], currentPage: number,  next: () => void, prev: () => void } {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsCount, setResultsCount] = useState(8);
    const userService: UserRepository = new UserRepository("https://randomuser.me/api");

    useEffect(() => {
        userService.Get(currentPage, resultsCount)
            .then((response) => response.json())
            .then((data: UsersGetResponse) => setUsers(data.results))
            .catch((err) => { throw err; })
    }, [currentPage, resultsCount]);

    const next = () => {
        setCurrentPage(currentPage + 1);
    }

    const prev = () => {
        if (currentPage - 1 == 0) { return; }
        setCurrentPage(currentPage - 1);
    }

    return { users, currentPage, next, prev };
}