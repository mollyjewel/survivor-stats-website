const HIERARCHY = ["city", "island", "state", "municipality", "province", "country"];

function getHierarchy() {
  return HIERARCHY;
}

function getText(locationMap) {
  if (locationMap == null) {return ""}

  const locationText = HIERARCHY.map(x => locationMap[x]).filter(x => x).join(", ");

  return locationText;
}

export default HIERARCHY;
export {getHierarchy, getText};
