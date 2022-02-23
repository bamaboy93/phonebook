function fetchQuote() {
  return fetch(`https://geek-jokes.sameerkumar.website/api?`).then((res) =>
    res.json()
  );
}

const apiQuote = {
  fetchQuote,
};

export default apiQuote;
