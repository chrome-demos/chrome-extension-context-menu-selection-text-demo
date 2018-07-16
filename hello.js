function alertSelection(info, tab) {
    alert(info.selectionText);
}

chrome.contextMenus.create({
    title: "Alert selection!",
    contexts: ["selection"],
    onclick: alertSelection
});