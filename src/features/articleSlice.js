import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import articleService from './articleService'

const initialState = {
	articles: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
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
