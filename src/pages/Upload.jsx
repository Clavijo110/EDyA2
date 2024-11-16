import React, { useEffect } from 'react';
import { useUploadHook } from '../hooks/useUploadHook';

export const Upload = () => {
    const {
        files,
        percent,
        handleChange,
        handleUpload,
        handleGetAll,
        handleDelete,
    } = useUploadHook();

    useEffect(() => {
        handleGetAll();
    }, [handleGetAll]);

    return (
        <div>
            <h1>Subir Imágenes a Firebase</h1>
            <input type="file" onChange={handleChange} accept="image/*" />
            <button onClick={handleUpload}>Subir a Firebase</button>
            <p>{percent}% completado</p>

            <div>
                {files.map((item, key) => (
                    <div key={key}>
                        <img src={item.url} alt={item.name} style={{ width: '150px' }} />
                        <button onClick={() => handleDelete(item.name)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};