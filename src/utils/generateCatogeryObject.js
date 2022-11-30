export const generateCatogeryObject = (catogery) => {
  return {
    image: catogery.image,
    name: catogery.name,
    parent_id: catogery.parent_id,
    self_id: catogery.id,
    slug: catogery.slug,
    display_type: catogery.display_type,
    icon: catogery.icon,
  };
};
