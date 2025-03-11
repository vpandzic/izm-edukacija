import React, { useEffect, useState } from "react";
import '../block.css';

const About2 = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/pages/582')
      .then(response => response.json())
      .then(data => setData(data));
  }, []
  );

  if(!data) return <p>Ucitavanje...</p>

  return (
    <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
  );
};

export default About2;