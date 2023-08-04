import { useState } from "react";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";

export default function useFirebaseImage(setValue, getValues) {
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const onSelectImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setValue("image_name", file.name);
    handleUploadImage(file);
    console.log(file.name);
  };

  const handleUploadImage = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const imageProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        setProgress(imageProgress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("");
        }
      },
      (error) => {
        console.log("Error uploading image");
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };

  const handleDeleteImage = () => {
    const storage = getStorage();

    // Create a reference to the file to delete
    const imageRef = ref(storage, "images/" + getValues("image_name"));

    // Delete the file
    deleteObject(imageRef)
      .then(() => {
        console.log("File deleted successfully");
        setImage("");
        setProgress(0);
      })
      .catch((error) => {
        console.log("Uh-oh, an error occurred!");
      });
  };
  return { onSelectImage, image, progress, handleDeleteImage };
}
