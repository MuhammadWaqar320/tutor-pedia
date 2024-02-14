import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { storage } from "@/config/fbConfig";

export const uploadFileToFBStorageAndGetURL = async (
  route: string,
  file: File | null
) => {
  try {
    if (file && route) {
      const fileRef = await uploadBytes(ref(storage, route), file);
      const url = await getDownloadURL(fileRef.ref);
      return {
        success: true,
        url: url,
        message: "File has been uploaded",
      };
    }
    return {
      success: false,
      message: "File and route are required",
      url: "",
    };
  } catch (error) {
    return {
      success: false,
      message: `An error occurred while processing your request. Error:${error}`,
      url: "",
    };
  }
};

export const deleteObjectFromFireBaseStorage = async (url: string) => {
  const objectRef = ref(storage, url);
  // Delete the file
  try {
    await deleteObject(objectRef);
    return {
      success: true,
      message: "Object has been deleted",
    };
  } catch (error: unknown) {
    return {
      success: false,
      message: `An error occurred while deleting a firebase object. Error:${error}`,
    };
  }
};