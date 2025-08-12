export default function (block) {
  const classes = [];
  const types = ['Top', 'Bottom'];

  types.forEach((type) => {
    const property = `gap${type}`;
    const value = block[property];
    const paddingType = type.toLowerCase();

    if (block.noGap) {
      classes.push(`padding-${paddingType}-none`);
      return;
    }

    if (!value) {
      classes.push(`padding-${paddingType}-small`);
      return;
    }

    if (value === 'wide') {
      classes.push(`padding-${paddingType}-wide`);
    } else if (value === 'small') {
      classes.push(`padding-${paddingType}-small`);
    } else if (value === 'mini') {
      classes.push(`padding-${paddingType}-mini`);
    } else if (value === 'none') {
      classes.push(`padding-${paddingType}-none`);
    }
  });

  return classes;
}
