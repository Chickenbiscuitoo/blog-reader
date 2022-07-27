import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import CommentItem from '../components/CommentItem'
import Spinner from '../components/Spinner'
import { getArticle, reset } from '../features/articleSlice'

function ArticleDetail() {
	const [showComments, setShowComments] = useState(false)
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
	}, [isError, message, dispatch, articleId])

	if (isLoading) {
		return <Spinner />
	}

	function comments() {
		const commentsArr = selectedArticle.comments
		if (commentsArr) {
			return commentsArr.map((comment) => (
				<CommentItem comment={comment} />
			))
		} else {
			return <h3>No comments found</h3>
		}
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
			<hr />
			{comments()}
		</div>
	)
}
export default ArticleDetail
