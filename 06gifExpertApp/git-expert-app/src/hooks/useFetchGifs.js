import {useState, useEffect} from "react";
import {getGifs} from "../helpers/getGif";

export const UseFetchGifs = ({category}) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        //esto es para que no sea una promesa lo que retorna
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        // return () => {
        getImages();
        //   };
    }, []);

    return {
        images: images,
        isLoading: isLoading
    }

}
