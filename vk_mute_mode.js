/**
 * Copyright 2024 Ruri Gokou (Kuroneko-yousenpai)
 * Email: Kuronekoyousenpai@protonmail.ch
 * Telegram: https://t.me/Kuroneko_yousenpai
 * VK: https://vk.com/kuroneko_yousenpai
 */

// List of vk user IDs to check
const userIDs = ["260910699", "864676605", "667817175", "647474124", "795917421"];

function checkAndRemoveElements() {
    const messageElements = document.querySelectorAll('.im-mess-stack._im_mess_stack');
    
    messageElements.forEach((messageElement) => {
        let userId = messageElement.getAttribute('data-peer');
        
        // Check if the data-peer attribute matches any ID in the userIDs list
        if (userId && userIDs.includes(userId)) {
            messageElement.remove();
        }
    });
}

// Set up a MutationObserver to watch for changes in the target container
let targetNode = document.querySelector('._im_peer_history.im-page-chat-contain.glubs-container');

// Observer configuration
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            checkAndRemoveElements();
        }
    }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
checkAndRemoveElements();