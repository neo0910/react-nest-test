import { getRandomNumber } from './getRandomNumber';
import { getRandomUsername } from './getRandomUsername';

export const getInfluencers = (count: number) => {
  const influencers = [];

  for (let i = 0; i < count; i++) {
    influencers.push({
      avatar: `https://robohash.org/${i}`,
      country: null,
      followers: getRandomNumber(),
      name: getRandomUsername(),
      revenue: getRandomNumber(),
    });
  }

  return influencers;
};
