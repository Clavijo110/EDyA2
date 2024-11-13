import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: null,
        isLoading: false,
        hasError: false,
        counter: 1
    },
    reducers: {
        incrementCounter: (state) => {
            state.counter += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPokemon.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            });
    }
});

export const { incrementCounter } = pokemonSlice.actions;
export default pokemonSlice.reducer;