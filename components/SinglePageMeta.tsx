const SinglePageMeta = (props) => {
  const { metadata, extra_classname } = props;

  return (
    <>
      <div className={`${extra_classname}`}>
        <div className="mb-2">
          {metadata.tags.map((tag: String) => (
            <span className="bg-green-500 rounded text-sm text-green-900 px-1 mr-2">
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
