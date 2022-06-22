import {getGifs} from "../helpers/getGif";
import {useState, useEffect} from "react";
import {GifItem} from "./GifItem";
import {UseFetchGifs} from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {

    const {images, isLoading} = UseFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando</h2>)
            }

            <div className="card-grid">
                {
                    images.map((c) => (
                        <GifItem key={c.id} gif={c}></GifItem>
                    ))
                }
            </div>
        </>
    );
}
