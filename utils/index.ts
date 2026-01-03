import sanitizeHtml from 'sanitize-html';

export const sanitize = (content: string) => sanitizeHtml(content, {
  allowedTags: sanitizeHtml.defaults.allowedTags,
  allowedAttributes: {
    a: ['href', 'target'],
    img: ['src', 'alt'],
  },
});
