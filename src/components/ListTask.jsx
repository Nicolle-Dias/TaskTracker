import Task from './Task'

export default function ListTask({ tasks }) {
    return (
        <section id="list_task">
            <div id="task_header">
                <div id="task_header_key">Nº</div>
                <div id="task_header_title">Title</div>
                <div id="task_header_description">Description</div>
                <div id="task_header_due_date">Due date</div>
                <div id="task_header_priority">Priority</div>
                <div id="task_header_status">Complete?</div>
            </div>
            {
                tasks.map((task, index) =>
                    <Task
                        number={index+1}
                        title={task.title}
                        description={task.description}
                        dueDate={task.due_date}
                        priority={task.priority}
                        status={task["completed?"].toString()}
                        uuid={task.id}/>
                    )
            }
        </section>
    )
}

