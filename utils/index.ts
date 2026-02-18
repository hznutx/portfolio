import {ECodeType} from '@/components/elements';
import {SiTailwindcss, SiCss3, SiJavascript, SiTypescript} from 'react-icons/si';
import sanitizeHtml from 'sanitize-html';

export const sanitize = (content: string) =>
  sanitizeHtml(content, {
    allowedTags: sanitizeHtml.defaults.allowedTags,
    allowedAttributes: {
      a: ['href', 'target'],
      img: ['src', 'alt'],
    },
  });

export function htmlClassToClassName(html: string): string {
  return html.replace(/\bclass="([^"]*)"/g, 'className="$1"');
}

export const codeTypeMatch = (key: ECodeType) => {
  let tagCode = '';
  let CodeIcon = SiTailwindcss;
  let bgColor = '';
  let textColor = '';

  switch (key) {
    case ECodeType.TAILWIND:
      return {tagCode: 'Tailwind', CodeIcon: SiTailwindcss, textColor: '#0495c2', bgColor: '#b3f5ee'};
    case ECodeType.CSS:
      return {tagCode: 'CSS ', CodeIcon: SiCss3, textColor: '#e8a200', bgColor: '#fff2a6'};

    case ECodeType.JAVASCRIPT:
      return {tagCode: 'JavaScript ', CodeIcon: SiJavascript, textColor: '#e69407', bgColor: '#ffdb9c'};

    case ECodeType.TYPESCRIPT:
      return {tagCode: 'TypeScript', CodeIcon: SiTypescript, textColor: '#005de8', bgColor: '#a4c4f5'};

    default:
      return {tagCode, CodeIcon, bgColor, textColor};
  }
};
