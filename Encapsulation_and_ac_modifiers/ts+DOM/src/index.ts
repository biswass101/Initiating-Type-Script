const userFrom = document.querySelector('.user-form') as HTMLFormElement;

const userName = document.querySelector('#name') as HTMLInputElement;

userFrom.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const data = {
        userName: userName.value
    };
    console.log(data);
})