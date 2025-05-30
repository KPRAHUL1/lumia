// UpdateParamsPage.js
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function UpdateParamsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const addCategory = () => {
    searchParams.set('category', 'electronics');
    setSearchParams(searchParams);
  };

  return (
    <div>
      <h1>Update Parameters</h1>
      <button onClick={addCategory}>Add Category</button>
    </div>
  );
}

export default UpdateParamsPage;
