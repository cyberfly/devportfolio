const SkillCard = (props) => {
  const { skill } = props;

  return (
    <div className="bg-slate-900 rounded py-4 px-4 border border-slate-800 hover:ring-1 hover:ring-green-600">
      <h3 className="text-xl font-medium text-center">{skill.name}</h3>
    </div>
  );
};

export default SkillCard;
