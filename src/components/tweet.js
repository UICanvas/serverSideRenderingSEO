export default function tweet(tweet) {
  let twitterIntentURL = "https://twitter.com/intent/tweet?";
  let text = encodeURIComponent(tweet);
  let url = `${twitterIntentURL}text=${text}&related=rohitkrops`;
  window.open(url, `Share`,"height=400, width=300");
}
