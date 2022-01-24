import React from 'react';

const Project = ({ projects }) => {
  console.log(projects);
  return <div>projects</div>;
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/projects');
  const projects = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: ['/projects/stefanos'],
    fallback: false,
  };
}

export default Project;
