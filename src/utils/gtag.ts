export const trackEvent = ({
  action,
  category,
  label,
}: {
  action: 'click';
  category: 'link';
  label: '다른 글 구경하기';
}) => {
  // gtag는 개발 환경에서 활성화되지 않는다.
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'development')
    return;

  gtag('event', action, {
    event_category: category,
    event_label: label,
  });
};
