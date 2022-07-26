import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ArticleItem from '../components/ArticleItem'
import Spinner from '../components/Spinner'
import { getAllArticles, reset } from '../features/articleSlice'

function Dashboard() {
	const dispatch = useDispatch()
	const { articles, isLoading, isError, message } = useSelector(
		(state) => state.article
	)

	useEffect(() => {
		if (isError) {
			console.log(message)
		}

		dispatch(getAllArticles())

		return () => {
			dispatch(reset())
		}
	}, [isError, message, dispatch])

	if (isLoading) {
		return <Spinner />
	}

	const articleItems = articles.map((article) => (
		<ArticleItem
			key={article._id}
			id={article._id}
			title={article.title}
			author={article.author}
		/>
	))

	return <>{articleItems}</>
}

export default Dashboard
