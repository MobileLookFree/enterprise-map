import { PREFIX } from '../prefix';

export const actionTypes = {
  download: {
    start: `${PREFIX}_DOWNLOAD_START`,
    success: `${PREFIX}_DOWNLOAD_SUCCESS`,
    error: `${PREFIX}_DOWNLOAD_ERROR`,
  }
};

export const startDownloading = () => {
  return {
    type: actionTypes.download.start,
  }
};