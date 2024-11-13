import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon, incrementCounter } from '../store/pokemonSlice';

export const MultipleCustomHooks = () => {
    const dispatch = useDispatch();
    const { data, isLoading, counter } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemon(counter));
    }, [counter, dispatch]);

    return (
        <>
            <h1>Pokémon Info</h1>
            <hr />
            {isLoading ? (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            ) : (
                <blockquote className="blockquote text-end">
                    <p className="mb-1">Name: {data?.name}</p>
                    <footer className="blockquote-footer">ID: {data?.id}</footer>
                    <p className="mb-1">Weight: {data?.weight}</p>
                </blockquote>
            )}
            <button className="btn btn-primary" onClick={() => dispatch(incrementCounter())}>
                Next Pokémon
            </button>
        </>
    );
};