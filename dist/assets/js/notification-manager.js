//Create Notification form popup                                                                                                                                                                                                                                                                                              form popup
const createNotificationSection = document.getElementById("create-notification-popup-section");
const openCreateSec = document.getElementById("create-new-notication");
const closeCreateFormBtn = document.getElementById("close-create-new-notification");
function showCreateForm() {
    createNotificationSection.classList.toggle("hidden");
    createNotificationSection.classList.toggle("flex");
}

closeCreateFormBtn.addEventListener("click", () => {
    showCreateForm();
});
openCreateSec.addEventListener("click", () => {
    showCreateForm();
});

const scheduledLabel = document.getElementById('scheduleNotification');
const dateTimePicker = document.getElementById('showDate&TimePicker');
scheduledLabel.addEventListener('change', ()=>{
    if(scheduledLabel.value == "Schedule for Later"){
        dateTimePicker.classList.remove('hidden');
        dateTimePicker.classList.remove('flex');
    }
})

//Edit Notification form popup                                                                                                                                                                                                                                                                                              form popup
const editNotificationSection = document.getElementById("Edit-notification-popup-section");
const openEditSec = document.getElementById("editData");
const closeEditFormBtn = document.getElementById("close-edit-notification");
function showEditForm() {
    editNotificationSection.classList.toggle("hidden");
    editNotificationSection.classList.toggle("flex");
}

const allEditBtns = openEditSec.querySelectorAll('.editNotification');
//console.log(allEditProfileBtns)
allEditBtns.forEach((editBtn)=>{
    editBtn.addEventListener("click", () => {
        const notificationID = editBtn.firstElementChild.textContent
        const notificationIDFormField = editNotificationSection.querySelector("#selectedNotificationID");
        notificationIDFormField.value = notificationID;
        showEditForm();
    });
})

closeEditFormBtn.addEventListener("click", () => {
    showEditForm();
});



//Delete notification form popup                                                                                                                                                                                                                                                                                              form popup
const deleteNotificationSection = document.getElementById("delete-notification-popup-section");
const tableSection = document.getElementById("editData");
const closeDeleteFormBtn = document.getElementById("close-delete-user-form-popup");
const cancelDeleteFormBtn = document.getElementById("cancelDelete");
function showDeleteForm() {
    deleteNotificationSection.classList.toggle("hidden");
    deleteNotificationSection.classList.toggle("flex");
}

const alldeleteUserBtns = tableSection.querySelectorAll('.deleteNotification');
//console.log(allEditProfileBtns)
alldeleteUserBtns.forEach((deleteBtn)=>{
  deleteBtn.addEventListener("click", () => {
    const deleteNotificationID = deleteBtn.firstElementChild.textContent
    const deleteNotificationIDFormField = deleteNotificationSection.querySelector("#notificationIDtoDelete");
    deleteNotificationIDFormField.value = deleteNotificationID;
    showDeleteForm();

    });
})

closeDeleteFormBtn.addEventListener("click", () => {
  showDeleteForm();
});
cancelDeleteFormBtn.addEventListener("click", () => {
  showDeleteForm();
});