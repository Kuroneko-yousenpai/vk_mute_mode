/**
 * Copyright 2024 Ruri Gokou (Kuroneko-yousenpai)
 * Email: Kuronekoyousenpai@protonmail.ch
 * Telegram: https://t.me/Kuroneko_yousenpai
 * VK: https://vk.com/kuroneko_yousenpai
 */

// List of vk user IDs to check
const userIDs = ["260910699", "864676605", "667817175", "647474124", "795917421", "801639527", "631760048", "847428438", "864978588", "842568982", "138277688", "593940366", "344974545", "851942133", "116376805", "299195182", "816991698", "140496489", "749942771", "587824212", "549905143", "706014098", "544632435", "550475212", "121883329", "518913444", "293484839", "286084044", "227149446", "227598857", "712822989", "604107214", "581457203", "437798198", "182074336", "815276980", "447761967", "411352286", "333040068", "270252048", "532977930", "613964770", "514885220", "825611655", "508794646", "223749618", "381493022", "867964351", "836906395", "882379475", "873485812", "201359434", "387375926", "631436327", "774779548", "708786845", "533914378", "70871095", "582237092", "425342592", "829580079", "533920231", "459146091", "877887711", "639643509", "863010424"];

function checkAndRemoveElements() {
    const messageElements = document.querySelectorAll('.im-mess-stack._im_mess_stack');
    
    messageElements.forEach((messageElement) => {
        let userId = messageElement.getAttribute('data-peer');
        
        let nameElement = messageElement.querySelector('.im-mess-stack--pname a');
		
		// Check if the data-peer attribute matches any ID in the userIDs list
        if (userId && userIDs.includes(userId)) {
            let userName = nameElement ? nameElement.textContent.trim() : null;
			let displayName = userName ? userName : userId;
			hp = Math.floor(Math.random() * (250 - 150 + 1)) + 150
			console.log(`[consollite] Hurt ${displayName} in head for ${hp} hp (0 hp remaining)`)
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
