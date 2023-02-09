export function Card(props) {
  return (
    <div className="card" onClick={props.shuffle}>
      <img src={props.waifu.url} alt={props.waifu.alt} />
      <p>{props.waifu.name}</p>
    </div>
  );
}
