import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import articleService from './articleService'

const initialState = {
	apiStats: [],
	articles: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

// Get API stats
export const getApiStats = createAsyncThunk(
	'articles/getStats',
	async (_, thunkAPI) => {
		try {
			return await articleService.getApiStats()
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Get All Articles
export const getAllArticles = createAsyncThunk(
	'articles/getAll',
	async (_, thunkAPI) => {
		try {
			return await articleService.getAllArticles()
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Get Specific Article
export const getArticle = createAsyncThunk(
	'articles/getOne',
	async (id, thunkAPI) => {
		try {
			return await articleService.getArticle(id)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getApiStats.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getApiStats.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.apiStats.push(action.payload)
			})
			.addCase(getApiStats.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getAllArticles.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getAllArticles.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.articles.push(action.payload)
			})
			.addCase(getAllArticles.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset } = articleSlice.actions
export default articleSlice.reducer
