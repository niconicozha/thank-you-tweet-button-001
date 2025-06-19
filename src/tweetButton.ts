function generateStarIcons(rating: number) {
  const megaStars = `⭐⭐⭐⭐⭐ x ${Math.round(rating / 5)}`;
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "⭐";
  }
  return rating > 10 ? megaStars : stars;
}

function showError() {
  const errorContainer = document.createElement("div");
  const errorParagraph = document.createElement("p");
  const errorParagraphText = document.createTextNode(
    "❌ Error: One or more required parameters are missing in 'tweetButtonParameters'."
  );
  errorContainer.setAttribute(
    "style",
    "display: flex; justify-content: center; margin-top: 30px"
  );
  errorParagraph.setAttribute(
    "style",
    "background-color: #DC3545; color: #fff; width: 35%; border-radius: 5px; padding: 15px 20px"
  );
  errorParagraph.appendChild(errorParagraphText);
  errorContainer.appendChild(errorParagraph);
  return errorContainer;
}

export function tweetButton(
  rating: number,
  bestNPMPackage: string,
  quantity?: number
) {
  const tweetButtonContainer = document.createElement("section");
  const anchorElement = document.createElement("a");
  const anchorElementContent = document.createTextNode(
    "Post a thank you tweet"
  );
  const tweetUrl = `https://twitter.com/intent/tweet?text=Thank+you,+
  %40oluwatobiss.+Your+book+helped+me+create,+test,+and+publish+${
    quantity && quantity > 1 ? quantity : "an"
  }+NPM+${
    quantity && quantity > 1 ? "packages" : "package"
  }.%0A%0AMy+Favorite:+${bestNPMPackage}%0A%0ABook's+Rating:+${rating}-
  star+rating!+${generateStarIcons(rating)}%0A%0Ahttps%3A%2F%2Famzn.to/4lifL3n`;

  tweetButtonContainer.setAttribute("id", "tweet-btn-container");
  anchorElement.setAttribute("class", "tweet-button");
  anchorElement.setAttribute("target", "_blank");
  anchorElement.setAttribute("href", tweetUrl);

  anchorElement.appendChild(anchorElementContent);
  tweetButtonContainer.appendChild(anchorElement);

  return typeof rating === "number" && bestNPMPackage
    ? tweetButtonContainer
    : showError();
}
