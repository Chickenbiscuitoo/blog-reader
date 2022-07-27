import axios from 'axios'

const API_URL = 'http://localhost:5000/api/'

// Get stats
const getApiStats = async () => {
	const response = await axios.get(API_URL)

	return response.data
}

// Get articles
const getAllArticles = async () => {
	const response = await axios.get(API_URL + 'articles')

	return response.data.list_articles
}

// Get specific article
const getArticle = async (articleId) => {
	const response = await axios.get(API_URL + 'article/' + articleId)
	return response.data.article
}

const articleService = {
	getApiStats,
	getAllArticles,
	getArticle,
}

export default articleService
