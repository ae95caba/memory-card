export function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.waifu.url} alt={props.waifu.alt} />
      <p>{props.waifu.name}</p>
    </div>
  );
}
