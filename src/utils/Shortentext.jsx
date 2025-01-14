const ShortenText = ({ text, maxLength }) => {
  const shortenedText =
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return shortenedText;
};
export default ShortenText