import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Acción para obtener datos de Pokémon según el contador
export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (counter) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
        return response.json();
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        counter: 1,
        data: null,
        isLoading: false,
        hasError: null
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            if (state.counter > 1) {
                state.counter -= 1;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.isLoading = true;
                state.hasError = null;
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = action.error.message;
            });
    }
});

export const { increment, decrement } = pokemonSlice.actions;
export default pokemonSlice.reducer;