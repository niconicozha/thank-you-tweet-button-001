export function tweetButton() {
  const tweetButtonContainer = document.createElement("section");
  const anchorElement = document.createElement("a");
  const anchorElementContent = document.createTextNode(
    "Send a thank you tweet"
  );
  const tweetUrl =
    "https://twitter.com/intent/tweet?text=Thank+you,+%40oluwatobiss.+Your+book+helped+me+create,+test,+and+publish+an+NPM+package%0A%0ACreating%20NPM%20Package%0A%0Ahttps%3A%2F%2Famzn.to/4lifL3n";

  tweetButtonContainer.setAttribute("id", "tweet-btn-container");
  anchorElement.setAttribute("class", "tweet-button");
  anchorElement.setAttribute("target", "_blank");
  anchorElement.setAttribute("href", tweetUrl);

  anchorElement.appendChild(anchorElementContent);
  tweetButtonContainer.appendChild(anchorElement);

  return tweetButtonContainer;
}
