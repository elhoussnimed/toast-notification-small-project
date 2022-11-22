const btn = document.querySelector("button");
const notificationContainer = document.querySelector(".notification__container");


const showNotification = () => {
    const notifationsNumbers = ["One", "Two", "Three", "Four", "Five","six","seven","eight","nine","ten"];
    const notifationsColors = ["red", "blue", "green", "black", "purple","pink","orange"];
    let notificationNumber = notifationsNumbers[Math.floor(Math.random() * notifationsNumbers.length)];
    let notificationcolor = notifationsColors[Math.floor(Math.random() * notifationsColors.length)];

    const notification = document.createElement("div");
    const notificationText = document.createTextNode(`notification ${notificationNumber}`)
    notification.classList.add("notification");
    notification.style.color = notificationcolor;
    notification.append(notificationText)
    notificationContainer.append(notification);

    setTimeout(()=>{
        notification.remove();
    },5000)
}

btn.addEventListener("click", showNotification);