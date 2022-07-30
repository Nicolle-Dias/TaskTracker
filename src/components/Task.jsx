export default function Task({uuid, title, description, number, priority, dueDate, status}) {

    return (
        <article className="task_container" key={uuid}>
            <p>{number}</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{dueDate}</p>
            <p>{priority}</p>
            <p>{status} <button className="delete_task">del</button></p>

        </article>
    )
}