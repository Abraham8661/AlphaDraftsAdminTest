//Create Notification form popup                                                                                                                                                                                                                                                                                              form popup
const createPlanSection = document.getElementById("create-plan-popup-section");
const openCreateSec = document.getElementById("create-new-plan");
const closeCreateFormBtn = document.getElementById("close-create-new-plan");
function showCreateForm() {
    createPlanSection.classList.toggle("hidden");
    createPlanSection.classList.toggle("flex");
}

closeCreateFormBtn.addEventListener("click", () => {
    showCreateForm();
});
openCreateSec.addEventListener("click", () => {
    showCreateForm();
});


//Edit Plan form popup                                                                                                                                                                                                                                                                                              form popup
const editPlanSection = document.getElementById("Edit-plan-popup-section");
const openEditSec = document.getElementById("monthlyData");
const closeEditFormBtn = document.getElementById("close-edit-plan");
function showEditForm() {
    editPlanSection.classList.toggle("hidden");
    editPlanSection.classList.toggle("flex");
}

const allEditBtns = openEditSec.querySelectorAll('.editPlan');
//console.log(allEditProfileBtns)
allEditBtns.forEach((editBtn)=>{
    editBtn.addEventListener("click", () => {
        const planId = editBtn.firstElementChild.textContent
        const planIDFormField = editPlanSection.querySelector("#planIDtoEdit");
        planIDFormField.value = planId;
        showEditForm();
    });
})

closeEditFormBtn.addEventListener("click", () => {
    showEditForm();
});



//Delete notification form popup                                                                                                                                                                                                                                                                                              form popup
const deletePlanSection = document.getElementById("delete-plan-popup-section");
const tableSection = document.getElementById("monthlyData");
const closeDeleteFormBtn = document.getElementById("close-delete-plan-form-popup");
const cancelDeleteFormBtn = document.getElementById("cancelDelete");
function showDeleteForm() {
    deletePlanSection.classList.toggle("hidden");
    deletePlanSection.classList.toggle("flex");
}

const alldeleteUserBtns = tableSection.querySelectorAll('.deletePlan');
//console.log(allEditProfileBtns)
alldeleteUserBtns.forEach((deleteBtn)=>{
  deleteBtn.addEventListener("click", () => {
    const deletePlanID = deleteBtn.firstElementChild.textContent
    const deletePlanIDFormField = deletePlanSection.querySelector("#planIDtoDelete");
    deletePlanIDFormField.value = deletePlanID;
    showDeleteForm();

    });
})

closeDeleteFormBtn.addEventListener("click", () => {
  showDeleteForm();
});
cancelDeleteFormBtn.addEventListener("click", () => {
  showDeleteForm();
});