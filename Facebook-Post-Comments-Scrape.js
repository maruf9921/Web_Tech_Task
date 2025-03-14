function clickMoreComments() {
    const buttons = Array.from(document.querySelectorAll('div[role="button"]'));
    const moreCommentsButton = buttons.find(button => button.textContent.includes('View more comments'));

    if (moreCommentsButton) {
        moreCommentsButton.click();
        console.log('Clicked "View more comments". Waiting for comments to load...');
        setTimeout(scrapeComments, 3000); // Adjust delay as necessary to ensure comments are loaded
    } else {
        console.log('No "View more comments" button found. Proceeding to scrape comments...');
        scrapeComments();
    }
}
function scrapeComments() {
    // Select only the comment elements, avoiding replies and reactions
    // This selector might need to be updated depending on Facebook's current HTML structure
    const comments = Array.from(document.querySelectorAll('div[dir="auto"][style="text-align: start;"]'));
    const mainComments = comments.filter(comment => {
        // Logic to determine if the comment is a main comment; might include checking for lack of a reply indicator, etc.
        return !comment.closest('.replyClass'); // Adjust the class to specifically exclude replies or nested comments
    });

    const commentTexts = mainComments.map(comment => comment.textContent.trim());

    console.log('Scraped Main Comments:', commentTexts);
}


clickMoreComments();
scrapeComments();