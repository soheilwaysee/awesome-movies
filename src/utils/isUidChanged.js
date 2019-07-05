import get from "lodash.get";
const isUidChanged = (prevProps, nextProps) =>
  get(prevProps, ["uid"]) === get(nextProps, ["uid"]);

export default isUidChanged;
