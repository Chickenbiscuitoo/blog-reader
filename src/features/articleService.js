import axios from 'axios'

const API_URL = 'http://localhost:5000/api/'

// Get stats
const getApiStats = async () => {
	const response = await axios.get(API_URL)

	return response
}

// Get articles
const getAllArticles = async () => {
	const response = await axios.get(API_URL + 'articles')

	return response
}

// Get specific article
const getArticle = async (articleId) => {
	const response = await axios.get(
		API_URL + 'articles/' + articleId
	)

	return response
}

const articleService = {
	getApiStats,
	getAllArticles,
	getArticle,
}

export default articleService
