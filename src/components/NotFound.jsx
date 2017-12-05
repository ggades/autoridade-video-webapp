import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="not-found text-center">
      <h1>404 - Not Found</h1>
      <p>Ops... Parece que ocorreu algum problema.</p>
      <div><Link to="/" className="btn btn-default">Voltar à página inicial</Link></div>
    </div>
  );
};

export default NotFound;
