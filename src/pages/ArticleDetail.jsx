import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { getArticle, reset } from '../features/articleSlice'

function ArticleDetail() {
	let { articleId } = useParams()

	const dispatch = useDispatch()
	const { selectedArticle, isLoading, isError, message } =
		useSelector((state) => state.article)

	useEffect(() => {
		if (isError) {
			console.log(message)
		}

		dispatch(getArticle(articleId))

		return () => {
			dispatch(reset())
		}
	}, [isError, message, dispatch])

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div>
			<h2>{selectedArticle.title}</h2>
			{selectedArticle.author ? (
				<h3>{selectedArticle.author.name}</h3>
			) : (
				<h3>Unknown</h3>
			)}
			<p>{selectedArticle.text}</p>
		</div>
	)
}
export default ArticleDetail
