import CreateTask from './CreateTask'
import ListTask from './ListTask'
import { useState, useEffect } from "react";

export default function Main() {
    const [tasks, setTasks] = useState([{
        title: "Lavar a louça",
        description: "Acumulou do final de semana",
        due_date: "2022-01-08 09:30:00",
        priority: "High",
        "completed?": false
    }])
    const [isLoading, setLoading] = useState(false)

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