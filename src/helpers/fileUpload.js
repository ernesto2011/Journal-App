
export const fileUpload = async(file) =>{
    if(!file) throw new Error("File not found");
    const url = 'https://api.cloudinary.com/v1_1/pruebas-test/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'journal');
    formData.append('file', file);
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
        if(!response.ok) throw new Error(`Error al subir el archivo: ${response.statusText}`);
        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
    }
}