export type ImageFormats = {
  large?: ImageInfo;
  small?: ImageInfo;
  medium?: ImageInfo;
  thumbnail?: ImageInfo;
};

export type ImageInfo = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
};
