import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';

export const PowerPointColorIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 32 32" className={classes.svg}>
      <path
        fill="#fafafa"
        d="M6.5 29V3c0-.1 0-.3.1-.4s.3-.1.4-.1h12.3c.1 0 .2 0 .3.1l6.7 6.7c.1.1.1.2.1.3V29c0 .1 0 .3-.1.4s-.2.1-.4.1H7c-.1 0-.3 0-.4-.1s-.1-.3-.1-.4z"
      />
      <path
        fill="#797774"
        d="M26.7 9c.2.2.3.4.3.7V29c0 .3-.1.5-.3.7s-.4.3-.7.3H7c-.3 0-.5-.1-.7-.3S6 29.3 6 29V3c0-.3.1-.5.3-.7S6.7 2 7 2h12.3c.3 0 .5.1.7.3M26 29V10h-6c-.3 0-.5-.1-.7-.3S19 9.3 19 9V3H7v26M20 9h5.3L20 3.7V9z"
      />
      <path
        fill="#ed6c47"
        d="M20 11c.7 0 1.3.1 2 .4.6.3 1.1.6 1.6 1.1.4.4.8 1 1.1 1.6.3.6.4 1.2.4 1.9h-5m3.9 1c0 .7-.1 1.3-.4 2-.3.6-.6 1.1-1.1 1.6-.5.4-1 .8-1.6 1.1-.6.3-1.3.4-2 .4-.4 0-.7 0-1-.1s-.7-.2-1-.3V17H24z"
      />
      <path fill="#ff8f6b" d="M17 12.4c.3-.1.6-.2 1-.3s.7-.1 1-.1v5h-2v-4.6z" />
      <path
        fill="#fff"
        fillOpacity=".498"
        d="M20 11c.7 0 1.3.1 2 .4.6.3 1.1.6 1.6 1.1.4.4.8 1 1.1 1.6.3.6.4 1.2.4 1.9h-5v-5z"
      />
      <path
        fill="#c43e1c"
        d="M14.8 9c.3 0 .6.1.8.3s.4.5.4.9v11.7c0 .3-.1.6-.3.8s-.5.3-.9.3H3.2c-.3 0-.6-.1-.8-.3s-.4-.5-.4-.9V10.2c0-.3.1-.6.3-.8s.5-.4.9-.4h11.6z"
      />
      <path
        fill="#fff"
        d="M9.2 12c1 0 1.7.2 2.2.7.5.4.8 1 .8 1.8 0 .4-.1.8-.2 1.2-.1.4-.3.7-.6.9-.3.3-.6.5-1 .6-.4.1-.8.2-1.3.2H7.6V20H6v-8m1.6 4h1.3c.5 0 .9-.1 1.2-.4s.4-.6.4-1.1c0-.9-.5-1.3-1.5-1.3H7.6V16z"
      />
    </svg>
  ),
  displayName: 'PowerPointColorIcon',
});
