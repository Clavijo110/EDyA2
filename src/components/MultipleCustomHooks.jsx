import React from 'react';
import { useCounter } from '../hooks/useCounter';
import {useFetch} from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Pokémon Info</h1>
            <hr />
            {
                isLoading ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">Name: {data?.name}</p>
                        <footer className="blockquote-footer">ID: {data?.id}</footer>
                        <p className="mb-1">Weight: {data?.weight}</p>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={() => increment()}>Next Pokémon</button>

        </>
    );
};