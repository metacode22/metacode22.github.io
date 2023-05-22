export const trackEvent = ({
  action,
  category,
  label,
}: {
  action: 'click';
  category: 'link';
  label: '다른 글 구경하기';
}) => {
  if (typeof window === 'undefined') return;

  gtag('event', action, {
    event_category: category,
    event_label: label,
  });
};
