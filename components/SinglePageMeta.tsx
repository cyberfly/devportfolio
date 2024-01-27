interface ISinglePageMetaProps {
  metadata: {
    slug: string;
    title: string;
    tags: string[];
    categories?: string[];
    date?: string;
    image?: string;
  };
  extra_classname: String;
}

const SinglePageMeta = (props: ISinglePageMetaProps) => {
  const { metadata, extra_classname } = props;

  return (
    <>
      <div className={`${extra_classname}`}>
        <div className="mb-2">
          {metadata.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-green-500 rounded text-sm text-gray-800 px-1 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <p className="text-slate-300">Published on {metadata.date}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePageMeta;
