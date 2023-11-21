export const classNames = (
  ...args: (string | Record<string, boolean> | string[] | undefined | null | boolean)[]
): string => {
  return args
    .map((item) => {
      if (!item) return '';
      if (['string', 'boolean'].includes(typeof item)) {
        return item.toString();
      }
      if (Array.isArray(item)) {
        return classNames(...item);
      }
      return classNames(
        Object.entries(item)
          .filter(([, enabled]) => enabled)
          .map(([name]) => name)
      );
    })
    .join(' ');
};
