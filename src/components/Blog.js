import React, { Component } from 'react';

export default class Blog extends Component {
  state = {
    blogs: [
      {
        id: 1,
        title: 'banana blues',
        content:
          'Minim est adipisicing cupidatat quis nostrud laboris ipsum laborum sunt veniam laborum exercitation exercitation elit. Duis velit aliquip labore est voluptate proident elit cillum ipsum consectetur nisi est enim. Voluptate et sint velit aliqua ipsum. Sint reprehenderit culpa eiusmod sit duis ad consequat ad. Consequat consequat veniam aliquip mollit voluptate incididunt ea magna velit esse pariatur. Cillum nulla officia cillum nisi proident amet amet laboris consequat fugiat. Duis incididunt occaecat fugiat magna.'
      },
      {
        id: 2,
        title: 'Jambo Jet',
        content:
          'Minim est adipisicing cupidatat quis nostrud laboris ipsum laborum sunt veniam laborum exercitation exercitation elit. Duis velit aliquip labore est voluptate proident elit cillum ipsum consectetur nisi est enim. Voluptate et sint velit aliqua ipsum. Sint reprehenderit culpa eiusmod sit duis ad consequat ad. Consequat consequat veniam aliquip mollit voluptate incididunt ea magna velit esse pariatur. Cillum nulla officia cillum nisi proident amet amet laboris consequat fugiat. Duis incididunt occaecat fugiat magna.'
      }
    ]
  };

  renderBlog = () => {
    const { blogs } = this.state;

    return blogs.map(blog => {
      return (
        <li key={blog.id}>
          <h2>{blog.title}</h2>
          <div>{blog.content}</div>
        </li>
      );
    });
  };

  render() {
    return <div>{this.renderBlog()}</div>;
  }
}
