import CreateTask from './CreateTask'
import ListTask from './ListTask'
import { useState, useEffect } from "react";

export default function Main() {
    const [tasks, setTasks] = useState([])
    const [isLoading, setLoading] = useState(true)

    function fetchTasks(){
        let headers = new Headers()
        headers.append("Accept", "*/*")
        
        fetch(`${import.meta.env.VITE_API_URL}pending`, {
            headers: headers
        }).then(
            data => { 
                return data.json()
        }).then(
            data => {
                setTasks(data);
        }).then(
            () => {
                setLoading(false);
                setTimeout(fetchTasks, 1000)
        })
    }

    useEffect(() => {
        const timer = setTimeout(fetchTasks, 1000);
        return () => clearTimeout(timer)
    }, [])

    return (
        <main>
            <CreateTask />
            {
                !isLoading ? (
                    <ListTask tasks={tasks} />
                ) : (
                    <section id="list_task">
                        Loading...
                    </section>
                )
            }
        </main>
    )
}