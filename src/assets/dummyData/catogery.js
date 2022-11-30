import { dummyDataImages } from "../dummyDataImages";
import { catogeryIds } from "./catogeryIds";
import { subCatogriesDetails } from "./subCatogriesDetails";

export const catogery = (catogeryIdsIndex) => {
  return {
    catogeryId: catogeryIds[catogeryIdsIndex].id,
    name: catogeryIds[catogeryIdsIndex].name,
    catogeryBannerDetails: {
      catogeryPath: catogeryIds[catogeryIdsIndex].name,
      catogeryDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      catogeryBannerImage: dummyDataImages.bannerImagesArray[0],
    },
    catogreyHeaderDetails: {
      firstImageDetails: {
        heading: "Lorem epsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        image: dummyDataImages.headerImagesArray[0],
      },
      secondImageDetails: {
        heading: "Lorem epsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        image: dummyDataImages.headerImagesArray[1],
      },
    },
    subCatogriesDetails: subCatogriesDetails,
  };
};
