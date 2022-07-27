import React from 'react'
import { Link } from 'react-router-dom'

function ArticleItem({ title, author, id }) {
	return (
		<div className="article-item">
			<Link to={`/article/${id}`}>
				<h3>{title}</h3>
			</Link>
			<h5>{author.name}</h5>
		</div>
	)
}

export default ArticleItem
