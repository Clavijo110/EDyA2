import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon, increment, decrement } from '../store/pokemonSlice';

export const MultipleCustomHooks = () => {
    const dispatch = useDispatch();
    const { counter, data, isLoading } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemon(counter));
    }, [counter, dispatch]);

    return (
        <div className="pokemon-info">
            <h2>Pokémon Info</h2>
            <hr />
            {
                isLoading ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-center">
                        <p className="mb-1">Name: <strong>{data?.name}</strong></p>
                        <footer className="blockquote-footer">ID: {data?.id}</footer>
                        <p className="mb-1">Weight: {data?.weight}</p>
                    </blockquote>
                )
            }
            <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-primary" onClick={() => dispatch(decrement())}>
                    Anterior Pokémon
                </button>
                <button className="btn btn-primary" onClick={() => dispatch(increment())}>
                    Siguiente Pokémon
                </button>
            </div>
        </div>
    );
};