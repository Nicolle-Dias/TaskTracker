export default function Task({uuid, title, description, number, priority, dueDate, status}) {
    function deleteTask() {
        fetch(
            `${import.meta.env.VITE_API_URL}${uuid}`, {method: 'DELETE', mode: 'cors'}
        )
    }
    return (
        <article className="task_container" key={uuid}>
            <p>{number}</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{dueDate}</p>
            <p>{priority}</p>
            <p>{status} <button className="delete_task" onClick={deleteTask}>del</button></p>

        </article>
    )
}