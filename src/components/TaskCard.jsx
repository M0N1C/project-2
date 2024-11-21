/* eslint-disable react/prop-types */
// We are deconstructing the props object directly in the parentheses of the function
function TaskCard({ title, description }) {
  return (
    <div className="task-card">
      <h3 className="task-title">{title}</h3>
      <h4 className="task-subtitle">Description:</h4>
      <p className="task-description">{description}</p>
    </div>
  );
}

export default TaskCard;
