const showdown = require('showdown');

class PostAnalyzer {
  // gets first image from html or markdown
  static getFirstImageFromPost(post) {
    let body = post.body;
    if (PostAnalyzer.getHTMLImageURL(body))
      return PostAnalyzer.getHTMLImageURL(body);
    if (PostAnalyzer.getMarkdownImageURL(body))
      return PostAnalyzer.getMarkdownImageURL(body);
    return null;
  }

  // grabs html image url from html
  static getHTMLImageURL(body) {
    var elem = document.createElement("div");
    elem.style.display = "none";
    document.body.appendChild(elem);
    elem.innerHTML = body;
    var image_element = elem.querySelector('img');
    elem.remove();
    if (image_element) return image_element.src;
  }

  // grabs markdown image url from markdown
  static getMarkdownImageURL(body) {
    var md_image = body.match(/!\[.*?\]\((.*?)\)/);
    if (md_image) return md_image[1].split(' ')[0];
  }

  // gets preview of body text
  // requires body text & character count for preview
  static getBodyPreview(body, previewCharacterCount) {
    var converter = new showdown.Converter();
    var html = converter.makeHtml(body);
    var elem = document.createElement('div');
    elem.innerHTML = html;
    var paragraph_element = elem.querySelector("p");
    elem.remove();
    if (paragraph_element) {
      var textString = paragraph_element.innerHTML;
      if (textString.length <= previewCharacterCount) {
        return textString;
      } else {
        return `${textString.substring(0, previewCharacterCount)}...`;
      }
    }
  }
}

export default PostAnalyzer;