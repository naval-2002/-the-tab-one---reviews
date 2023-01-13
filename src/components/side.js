function Side({ datahandler }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          datahandler("TOMMY");
        }}
      >
        TOMMY
      </button>
      <button
        type="button"
        onClick={() => {
          datahandler("BIGDROP");
        }}
      >
        BIGDROP
      </button>
      <button
        type="button"
        onClick={() => {
          datahandler("CUKER");
        }}
      >
        CUKER
      </button>
    </div>
  );
}
export default Side;
