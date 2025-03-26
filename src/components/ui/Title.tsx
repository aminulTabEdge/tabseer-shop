type TitleType = {
  title: string;
  description?: string;
};

const Title = ({ title, description }: TitleType) => {
  return (
    <div className="text-center py-6 lg:py-8 2xl:py-16">
      <h1 className="text-4xl font-bold">{title}</h1>
      {description && <p className="mt-2">{description}</p>}
    </div>
  );
};

export default Title;
