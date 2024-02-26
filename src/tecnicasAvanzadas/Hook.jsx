import React, { useState } from 'react';

export default function Hook() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p className='mt-4'>Hiciste clic {count} veces</p>
        <button className=" mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => setCount(count + 1)}>
          Haz clic en mí
        </button>
      </div>
    );
  }