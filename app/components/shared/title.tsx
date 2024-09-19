import React from 'react'


interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h2 className="text-[2rem] md:text-[2.5rem] font-bold font-[family-name:var(--font-rethink)] text-center">{title}</h2>
  );
}

export default Title;
