import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";

export const Dashboard = () => {
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.getUser();
    }, [])

    return (
        <div>
        <ul>
            {store.users.map((user1, i)=> (
            <li key={i} className="list-group-item">
                {user1.email}
            </li>
        ))}
        </ul>
        </div>
        )
}