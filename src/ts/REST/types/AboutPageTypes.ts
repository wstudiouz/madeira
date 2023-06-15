import {ImageFormats} from "./ImageFormats";

export type HeroData = {
  Hero: HeroData1;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

type HeroData1 = {
  id: number;
  title: string;
  text: string;
  desc: string;
  img1: ImageData;
  img2: ImageData;
  img3: ImageData;
  img4: ImageData;
  img5: ImageData;
};

export type ImageData = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: ImageFormats;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

interface ComplexCard {
  id: number;
  title: string;
  description: string;
}

interface Complex {
  id: number;
  title: string;
  rightBottomCard: ComplexCard;
  rightTopCard: ComplexCard;
}

export type ComplexData = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Complex: Complex;
};

interface WarrantyCard {
  id: number;
  text: string;
  desc: string;
  sup: number;
}

interface Warranty {
  id: number;
  title: string;
  description: string;
}

export type WarrantyData = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Warranty: {
    id: number;
    supCard2: WarrantyCard;
    supCard: WarrantyCard;
    warranty: Warranty;
    warrantyYearBg: ImageData;
  };
};

export type ProductionData = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Production: {
    id: number;
    title: string;
    img1: ImageData;
    img2: ImageData;
    factory: {
      id: number;
      title: string;
      description: string;
    };
  };
};

export type HandWorkData = {
  HandWork: {
    id: number;
    title: string;
    topImg: ImageData;
    bottomImg: ImageData;
  };
};
