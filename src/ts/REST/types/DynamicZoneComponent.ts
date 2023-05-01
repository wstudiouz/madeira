import {AboutPageListResponseDataItemAttributesIntroImage} from "../api/generated/api";

export enum ProjectDetailComponents {
  headSection = "cases.head-section",
  image = "others.image",
  imageWithDescripton = "others.image-with-description",
}

export type SwipeItemType = {
  subtitle: string;
  title: string;
};

export type DynamicZoneComponent = {
  id: number;
  __component: ProjectDetailComponents;
  subtitle?: string;
  image?: AboutPageListResponseDataItemAttributesIntroImage;
  firstColumnText?: string;
  secondColumnText?: string;
  thirdColumnText?: string;
  description?: string;
  isRight?: boolean;
  isBottomImg: boolean;
  navTitle: string;
};
