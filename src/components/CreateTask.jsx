export default function CreateTask() {
    const handleSubmit = (e) => {
        e.preventDefault(); //previne o comportamento pardão do form input type submit (neste caso, recarregar a página)

        let headers = new Headers()
        headers.append("Accept", "*/*")
        
        fetch(`${import.meta.env.VITE_API_URL}`, {
            method: 'POST',
            headers: headers,
            mode: "no-cors",
            body: new FormData(document.getElementById("create_task"))
        })
    }
    return (
        <section>
            <form id="create_task">
                <input type="text" id="task_title" name="title" placeholder="Enter task name..."></input>
                &nbsp;
                <input type="datetime-local" id="task_due_date" name="due_date"></input>
                <select name="priority" id="task_priority">
                <option value="" selected disabled hidden>Priority</option>
                    <option value="Highest">Highest</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    <option value="Lowest">Lowest</option>
                </select>
                <input type="text" id="task_description" name="description"  placeholder="Enter task description..."></input>
                <input type="submit" id="submit_task_btn" value="Add to list" onClick={handleSubmit}></input>
            </form>
        </section>
    )
}

