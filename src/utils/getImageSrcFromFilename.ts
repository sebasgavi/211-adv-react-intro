const baseExtensionsUrl = '/images/file_extensions/';

export const getImageSrcFromFilename = (filename: string = '') => {
  const parts = filename.split('.');
  const extension = parts[parts.length - 1];
  switch(extension) {
    case 'png':
    case 'jpg':
    case 'jpeg':
      return `${baseExtensionsUrl}image.png`;
    case 'pdf':
    case 'txt':
    case 'html':
      return `${baseExtensionsUrl}pdf.png`;
    default:
      return `${baseExtensionsUrl}default.png`;
  }
}