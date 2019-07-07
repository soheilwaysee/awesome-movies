import get from 'lodash.get';
const uidHasChanged = (prevProps, nextProps) =>
  get(prevProps, ['uid']) === get(nextProps, ['uid']);

export default uidHasChanged;
