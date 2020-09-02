import slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const getEventBySlug = (slug, events) => {
  const eventFound = events.listevents.find((event) => {
    const sluglink = slugify(event.title, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    });
    return slug === sluglink;
  });

  return eventFound;
};
