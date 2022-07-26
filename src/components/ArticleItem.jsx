import React from 'react'
import { Link } from 'react-router-dom'

function ArticleItem({ title, author, id }) {
	return (
		<div>
			<Link to={`/article/${id}`}>
				<h3>{title}</h3>
			</Link>
			<h4>{author.name}</h4>
			<hr />
		</div>
	)
}

export default ArticleItem
