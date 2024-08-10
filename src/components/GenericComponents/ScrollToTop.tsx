import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


export const calculateTimeAgo = (time: string) => {
  const now = new Date();
  const postedTime = new Date(time);
  const diffInSeconds = Math.floor((now.getTime() - postedTime.getTime()) / 1000);

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? 'hr' : 'hrs'} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? 'min' : 'mins'} ago`;
  } else {
    return 'just now';
  }
};

