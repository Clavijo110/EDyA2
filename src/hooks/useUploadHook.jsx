import { useState, useCallback } from "react";
import { getAll, upload } from "../firebase/files";
import { getDownloadURL, ref, deleteObject } from "firebase/storage";
import { firebaseStorage } from "../firebase/config";

export const useUploadHook = () => {
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState(null);
    const [percent, setPercent] = useState(0);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Por favor selecciona un archivo.");
            return;
        }

        const uploadTask = upload(file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (error) => console.error("Error al subir:", error),
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                setFiles((prev) => [...prev, { name: file.name, url }]);
                setFile(null);
                setPercent(0);
            }
        );
    };

    const handleGetAll = useCallback(async () => {
        try {
            const { items } = await getAll();
            const filesList = await Promise.all(
                items.map(async (itemRef) => {
                    const url = await getDownloadURL(itemRef);
                    return { name: itemRef.name, url };
                })
            );
            setFiles(filesList);
        } catch (error) {
            console.error("Error obteniendo archivos:", error);
        }
    }, []);

    const handleDelete = async (fileName) => {
        const fileRef = ref(firebaseStorage, `files/${fileName}`);
        try {
            await deleteObject(fileRef);
            setFiles((prev) => prev.filter((file) => file.name !== fileName));
            console.log("Archivo eliminado correctamente.");
        } catch (error) {
            console.error("Error eliminando el archivo:", error);
        }
    };

    return { files, percent, handleChange, handleUpload, handleGetAll, handleDelete };
};