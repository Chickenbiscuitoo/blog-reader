import React from 'react'

function CommentItem({ comment }) {
	const createdAt = new Date(comment.createdAt)
	const formatedDate = createdAt.toLocaleString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	return (
		<div className="comment-container">
			<h6>
				{comment.author} - {formatedDate}
			</h6>
			<p>{comment.text}</p>
		</div>
	)
}

export default CommentItem
