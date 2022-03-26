let c=0;

document.querySelector('#addTodo').onclick = function()
{

    let input=document.querySelector('#todoInput').value;
    if(input.length===0)
    {
        alert("Please enter the task")
    }
    else{
        document.querySelector('.todos').innerHTML+=`
        <p key=${c}>
        <span class="task">
        ${input}
        </span>
        </p>
        `;
        c++;

        let tasks=document.querySelector('.task');
        for(let i=0;i<tasks.length;i++)
        {
            tasks[i].onclick=function()
            {
                this.parentNode.remove();
            }
        }

    }
}