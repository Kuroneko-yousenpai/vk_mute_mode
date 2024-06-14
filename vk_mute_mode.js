/**
 * Copyright 2024 Ruri Gokou (Kuroneko-yousenpai)
 * Email: Kuronekoyousenpai@protonmail.ch
 * Telegram: https://t.me/Kuroneko_yousenpai
 * VK: https://vk.com/kuroneko_yousenpai
 */

const userNames = ["Forget Me", "Евгений Стрелецкий", "Ilya Miroshnik", "Глеб Алмазов", "Влад Цветков"];

function checkAndRemoveElements() {
    const messageElements = document.querySelectorAll('.im-mess-stack._im_mess_stack');
    
    messageElements.forEach((messageElement) => {
        // Find the <a> tag within the current message element
        const linkElement = messageElement.querySelector('.im-mess-stack--lnk');
        
        // Check if the <a> tag exists and if its text content matches any name in the userNames list - so remove
        if (linkElement && userNames.includes(linkElement.textContent.trim())) {
            messageElement.remove();
        }
    });
}

// Set up a MutationObserver to watch for changes in the target container
const targetNode = document.querySelector('._im_peer_history.im-page-chat-contain.glubs-container');

// Observer configuration: watch for child node additions
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