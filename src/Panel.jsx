
import { useState } from 'react';

export default function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="panel">
      <h4>{title}</h4>
      {isActive ? (
        <>
          <p>{children}</p>
          <button onClick={() => setIsActive(false)}>Hide</button>
        </>
      ) : (
        <button onClick={() => setIsActive(true)}>Show</button>
      )}
    </section>
  );
}
