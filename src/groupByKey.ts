type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: string): GroupsMap<R> {
  return items.reduce((acc, obj) => {
    if (!acc[obj[key]]) {
      acc[obj[key]] = [];
    }

    acc[obj[key]].push(obj);

    return acc;
  }, {});
}
