//your code here!

const list = document.getElementById("infi-list");

// Function to add list items
function addListItems(count = 10) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(listItem);
    }
}

// Detect when the user scrolls to the bottom
list.addEventListener("scroll", () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addListItems(2); // Add 2 more items when reaching the end
    }
});

// Initialize with 10 items
addListItems();
