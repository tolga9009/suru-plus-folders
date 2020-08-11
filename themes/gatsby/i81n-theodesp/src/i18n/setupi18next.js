import i18next from 'i18next';

function setupI18next(fallbackLng, i18nextOptions) {
  i18next.init({
    debug: true,
    defaultNS: 'messages',
    fallbackLng,
    react: {
      useSuspense: false,
    },
    interpolation: {
      prefix: '[[__',
      suffix: '__]]',
    },
    ...i18nextOptions,
  });

  return i18next;
}

export default setupI18next;