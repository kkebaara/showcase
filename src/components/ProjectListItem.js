import React from 'react';

function ProjectListItem({
id,
name,
about,
link,
image
}) {
  return (
    <li>
      <figure>
      <img src={image} alt={name}></img>
      <button> 🚀{0}</button>
      </figure>

      <article className='details'>
        <h4>{name}</h4>
        <p>{about}</p>
        <p><a href={link}>View Live</a></p>
      </article>
    </li>
  );
}

export default ProjectListItem;
