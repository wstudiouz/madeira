import {ImageData} from "./AboutPageTypes";

export type ACompData = {
  AComp: {
    rightText: ComplexCard;
    button: ComplexButton;
    image: ImageData;
    cardText: ComplexCard;
  };
};

export type DCompData = {
  DComp: {
    button: ComplexButton;
    letterImg: ImageData;
    secondImg: ImageData;
    firstImg: ImageData;
    cardText: ComplexCard;
  };
};

export type ECompData = {
  EComp: {
    button: ComplexButton;
    letterImg: ImageData;
    leftImg: ImageData;
    cardText: ComplexCard;
  };
};

export type ICompData = {
  IComp: {
    letterImgLeft: ImageData;
    letterImgRight: ImageData;
    bottomImg1: ImageData;
    bottomImg2: ImageData;
    bottomImg3: ImageData;
    cardTextFirst: ComplexCard;
    cardTextSecond: ComplexCard;
  };
};

export type RCompData = {
  RComp: {
    letterImg: ImageData;
    rightImg1: ImageData;
    rightImg2: ImageData;
    cardText: ComplexCard;
  };
};

export type SecondACompData = {
  SecondAComp: {
    leftImg1: ImageData;
    leftImg2: ImageData;
    leftImg3: ImageData;
    cardText: ComplexCard;
  };
};

interface ComplexCard {
  id: number;
  title: string;
  description: string;
}

interface ComplexButton {
  id: number;
  btnName: string;
  btnLink: string;
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
