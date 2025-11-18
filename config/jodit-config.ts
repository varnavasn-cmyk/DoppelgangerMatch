/* eslint-disable @typescript-eslint/no-explicit-any */
import { Jodit } from 'jodit-react';

export const joditConfig = {
  height: 500,
  toolbarAdaptive: false,
  font: {
    default: 'Inter',
    list: {
      Inter: 'Inter',
      Farro: 'Farro'
    }
  },
  fontSize: {
    values: ['8', '10', '12', '14', '16', '17', '18', '19', '20', '24', '30']
  },
  buttons: [
    'source',
    'undo',
    'redo',
    '|',
    'font',
    'fontsize',
    'brush',
    'paragraph',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'superscript',
    'subscript',
    '|',
    'ul',
    'ol',
    'outdent',
    'indent',
    '|',
    'align',
    'left',
    'center',
    'right',
    'justify',
    '|',
    'link',
    'image',
    'video',
    'file',
    'table',
    '|',
    'hr',
    'symbol',
    'fullsize',
    'print',
    'about'
  ],
  controls: {
    font: {
      default: 'Inter',
      list: Jodit.atom(['Inter', 'Farro'])
    },
    fontSize: {
      list: Jodit.atom([
        '8',
        '10',
        '12',
        '14',
        '16',
        '17',
        '18',
        '19',
        '20',
        '24',
        '30'
      ])
    }
  }
} as any;
