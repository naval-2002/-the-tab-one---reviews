function Bottom(props) {
  const { title, company, duties, dates } = props;

  return (
    <div>
      <div>
        <h5>{title}</h5>
        <button>{company}</button>
        <p> {dates} </p>
        <p> {duties} </p>
      </div>
    </div>
  );
}

export default Bottom;
