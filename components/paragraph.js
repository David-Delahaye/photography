export default function Paragraph({ data }) {
  return (
    <div className="paragraph-text">
      <div>
        <h2 className="paragraph-head">{data.head}</h2>
        <p className="paragraph-body">{data.body}</p>
      </div>
      {data.picture && <img src={data.picture} />}
    </div>
  );
}
